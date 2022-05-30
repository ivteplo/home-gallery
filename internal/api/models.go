// Copyright (c) 2022 Ivan Teplov

package api

type APIResponse[Info any] struct {
	Type    string `json:"type"`
	Message string `json:"message"`
	Data    Info   `json:"data"`
}
