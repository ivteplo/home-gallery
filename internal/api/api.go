// Copyright (c) 2022 Ivan Teplov

package api

import (
	"net/http"

	"github.com/gorilla/mux"
	"github.com/ivteplo/home-gallery/internal/helpers"
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
		router: mux.NewRouter().StrictSlash(false),
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
	server.router.HandleFunc("/api/upload", server.handleUpload()).Methods("POST")
}

func (server *APIServer) handleUpload() http.HandlerFunc {
	return func(writer http.ResponseWriter, request *http.Request) {
		var maxFileSize int64 = 128 << 20 // 128 mb
		request.ParseMultipartForm(maxFileSize)

		file, fileHeader, err := request.FormFile("uploadedFile")

		if err == nil {
			defer file.Close()
			err = server.store.SaveFile(file, fileHeader)
		}

		if err == nil {
			writer.WriteHeader(200)

			helpers.OutputJSONTo(writer, APIResponse[string]{
				Type:    "success",
				Message: "Uploaded successfully",
				Data:    "uploaded-successfully",
			})
		} else {
			writer.WriteHeader(400)

			helpers.OutputJSONTo(writer, APIResponse[string]{
				Type:    "error",
				Message: err.Error(),
				Data:    "could-not-upload",
			})
		}
	}
}

func (server *APIServer) configureStore() error {
	server.store = store.CreateStore(&server.config.Store)

	if err := server.store.Open(); err != nil {
		return err
	}

	return nil
}
