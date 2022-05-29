// Copyright (c) 2022 Ivan Teplov

package helpers

import (
	"encoding/json"
	"io/ioutil"
	"os"
)

func DecodeJSONFile[OutputStruct any](path string, output *OutputStruct) error {
	jsonFile, err := os.Open(path)
	if err != nil {
		return err
	}

	defer jsonFile.Close()

	byteValue, _ := ioutil.ReadAll(jsonFile)
	json.Unmarshal(byteValue, output)

	return nil
}
