// Copyright (c) 2022 Ivan Teplov

package store

import (
	"fmt"
	"io"
	"mime/multipart"
	"os"
	"path"
	"path/filepath"
	"time"

	"github.com/ivteplo/home-gallery/internal/helpers"
	"github.com/yargevad/filepathx"
)

type Store struct {
    config *Config
}

func CreateStore(config *Config) *Store {
    return &Store{
        config: config,
    }
}

func (store *Store) Open() error {
    if err := os.MkdirAll(store.config.Path, os.ModePerm); err != nil {
        return err
    }

    return nil
}

func (store *Store) SaveFile(file multipart.File, header *multipart.FileHeader) error {
    filename := header.Filename
    folder := "Unknown Date/"

    fileExtension := helpers.GetFileExtension(filename)

    var dateTime time.Time
    var err error

    if helpers.IsVideo(filename) {
        dateTime, err = helpers.GetVideoCreationTime(file)
    } else {
        dateTime, err = helpers.GetImageCreationTime(file)
    }

    if err == nil {
        filename = fmt.Sprintf(
            "%s-%s-%s-%s-%s-%s.%s",
            helpers.FixedNumberLength(dateTime.Year(), 4),
            helpers.FixedNumberLength(int(dateTime.Month()), 2),
            helpers.FixedNumberLength(dateTime.Day(), 2),
            helpers.FixedNumberLength(dateTime.Hour(), 2),
            helpers.FixedNumberLength(dateTime.Minute(), 2),
            helpers.FixedNumberLength(dateTime.Second(), 2),
            fileExtension,
        )

        folder = fmt.Sprintf(
            "%s/%s/",
            helpers.FixedNumberLength(dateTime.Year(), 4),
            helpers.FixedNumberLength(int(dateTime.Month()), 2),
        )
    }

    _, err = file.Seek(0, io.SeekStart)
    if err != nil {
        return err
    }

    resultingPath := path.Join(store.config.Path, folder, filename)
    return helpers.SaveFile(resultingPath, file)
}

func (store *Store) ListMedia() ([]string, error) {
    files, err := filepathx.Glob(filepath.Join(store.config.Path, "/**/*.*"))

    if files == nil {
        files = []string {}
    }

    if err == nil {
        for index, file := range files {
            relativePath, _ := filepath.Rel(store.config.Path, file)
            files[index] = filepath.ToSlash(relativePath)
        }
    }

    return files, err
}

func (store *Store) Close() {
}
