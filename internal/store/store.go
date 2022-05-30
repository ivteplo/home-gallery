// Copyright (c) 2022 Ivan Teplov

package store

import "os"

type Store struct {
	config *Config
}

func CreateStore(config *Config) *Store {
	return &Store{
		config: config,
	}
}

func (store *Store) Open() error {
	if err := os.MkdirAll(store.config.Path, os.ModePerm); err != nil {
		return err
	}

	return nil
}

func (store *Store) Close() {
}
