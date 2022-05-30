// Copyright (c) 2022 Ivan Teplov

package api

import (
	"io"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/ivteplo/home-gallery/internal/store"
)

type APIServer struct {
	config *Config
	router *mux.Router
	store  *store.Store
}

func CreateAPIServer(config *Config) *APIServer {
	return &APIServer{
		config: config,
		router: mux.NewRouter(),
	}
}

func (server *APIServer) Start() error {
	server.configureRouter()

	if err := server.configureStore(); err != nil {
		return err
	}

	return http.ListenAndServe(server.config.BindAddress, server.router)
}

func (server *APIServer) Exit() {
	server.store.Close()
}

func (server *APIServer) configureRouter() {
	server.router.HandleFunc("/hello", server.handleHello())
}

func (server *APIServer) handleHello() http.HandlerFunc {
	return func(writer http.ResponseWriter, request *http.Request) {
		io.WriteString(writer, "Hello")
	}
}

func (server *APIServer) configureStore() error {
	server.store = store.CreateStore(&server.config.Store)

	if err := server.store.Open(); err != nil {
		return err
	}

	return nil
}
