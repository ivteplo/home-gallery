// Copyright (c) 2022 Ivan Teplov

package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/", func(writer http.ResponseWriter, request *http.Request) {
		fmt.Fprintf(writer, "Hello, World!")
	})

	log.Print("Listening on localhost:3000")
	log.Fatal(http.ListenAndServe(":3000", nil))
}
