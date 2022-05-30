// Copyright (c) 2022 Ivan Teplov

package helpers

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"net/http"
	"os"
)

func ParseJSONFile[OutputStruct any](path string, output *OutputStruct) error {
	jsonFile, err := os.Open(path)
	if err != nil {
		return err
	}

	defer jsonFile.Close()

	byteValue, _ := ioutil.ReadAll(jsonFile)
	json.Unmarshal(byteValue, output)

	return nil
}

func OutputJSONTo[Struct any](writer http.ResponseWriter, object Struct) {
	writer.Header().Set("Content-Type", "application/json")

	if err := json.NewEncoder(writer).Encode(object); err != nil {
		log.Fatal(err)
	}
}
