// Copyright (c) 2022 Ivan Teplov

package api

import (
	"io"
	"net/http"

	"github.com/gorilla/mux"
)

type APIServer struct {
	config *Config
	router *mux.Router
}

func CreateAPIServer(config *Config) *APIServer {
	return &APIServer{
		config: config,
		router: mux.NewRouter(),
	}
}

func (server *APIServer) Start() error {
	server.configureRouter()

	return http.ListenAndServe(server.config.BindAddress, server.router)
}

func (server *APIServer) configureRouter() {
	server.router.HandleFunc("/hello", server.handleHello())
}

func (server *APIServer) handleHello() http.HandlerFunc {
	return func(writer http.ResponseWriter, request *http.Request) {
		io.WriteString(writer, "Hello")
	}
}
