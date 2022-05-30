// Copyright (c) 2022 Ivan Teplov

package api

type Config struct {
	BindAddress string `json:"bindAddress"`
}

func CreateConfig() *Config {
	return &Config{
		BindAddress: ":8080",
	}
}
