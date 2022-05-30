// Copyright (c) 2022 Ivan Teplov

package store

import "fmt"

type Store struct {
	config *Config
}

func CreateStore(config *Config) *Store {
	return &Store{
		config: config,
	}
}

func (store *Store) Open() error {
	fmt.Println("Store path: ", store.config.Path)
	return nil
}

func (store *Store) Close() {
}
