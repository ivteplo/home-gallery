// Copyright (c) 2022 Ivan Teplov

package helpers

import (
	"fmt"
	"io"
	"os"
	"path"
	"strings"
)

func GetFileExtension(filename string) string {
	parts := strings.Split(filename, ".")
	return parts[len(parts)-1]
}

func IsVideo(filename string) bool {
	extension := GetFileExtension(filename)
	return extension == "mp4" || extension == "mov"
}

func FileExists(filePath string) bool {
	_, err := os.Stat(filePath)

	if err == nil {
		return true
	}

	return !os.IsNotExist(err)
}

func SolveFilenameConflict(filePath string) string {
	folder := path.Dir(filePath)
	filename := path.Base(filePath)

	counter := 1
	nameParts := strings.Split(filename, ".")

	getNewFilename := func() string {
		result := ""

		for index, part := range nameParts {
			if index == len(nameParts)-2 {
				result += fmt.Sprintf("%s (%d)", part, counter)
			} else if index == len(nameParts)-1 {
				result += "." + part
			} else {
				result += part
			}
		}

		return result
	}

	for FileExists(path.Join(folder, getNewFilename())) {
		counter += 1
	}

	return path.Join(folder, getNewFilename())
}

func WriteToStream(output io.Writer, input io.Reader) error {
	buffer := make([]byte, 1024)

	for true {
		countOfReadBytes, err := input.Read(buffer)

		if err != nil && err != io.EOF {
			return err
		}

		if err == io.EOF || countOfReadBytes == 0 {
			break
		}

		if _, err := output.Write(buffer); err != nil {
			return err
		}
	}

	return nil
}

func SaveFile(filePath string, stream io.Reader) error {
	folder := path.Dir(filePath)

	if err := os.MkdirAll(folder, os.ModePerm); err != nil {
		return err
	}

	outputPath := filePath

	if FileExists(filePath) {
		outputPath = SolveFilenameConflict(filePath)
	}

	file, err := os.Create(outputPath)
	if err != nil {
		return err
	}

	defer file.Close()

	return WriteToStream(file, stream)
}
