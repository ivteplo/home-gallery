// Copyright (c) 2022 Ivan Teplov

package api

import (
	"github.com/ivteplo/home-gallery/internal/store"
)

type Config struct {
	BindAddress string       `json:"bindAddress"`
	Store       store.Config `json:"store"`
}

func CreateConfig() *Config {
	return &Config{
		BindAddress: ":8080",
		Store:       *store.CreateConfig(),
	}
}
