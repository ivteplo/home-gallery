// Copyright (c) 2022 Ivan Teplov

package main

import (
	"flag"
	"log"

	"github.com/ivteplo/home-gallery/internal/api"
	"github.com/ivteplo/home-gallery/internal/helpers"
)

var (
	configPath string
)

func init() {
	flag.StringVar(&configPath, "config-path", "configs/server.json", "path to configuration file")
}

func main() {
	flag.Parse()

	config := api.CreateConfig()

	err := helpers.DecodeJSONFile(configPath, &config)
	if err != nil {
		log.Fatal(err)
	}

	server := api.CreateAPIServer(config)
	log.Print("Listening on ", config.BindAddress)
	log.Fatal(server.Start())
}
