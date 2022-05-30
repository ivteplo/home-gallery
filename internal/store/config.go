// Copyright (c) 2022 Ivan Teplov

package store

type Config struct {
	Path string `json:"path"`
}

func CreateConfig() *Config {
	return &Config{}
}
