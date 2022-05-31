// Copyright (c) 2022 Ivan Teplov

import { createI18nContext, I18nContext } from "@solid-primitives/i18n"
import { Router } from "solid-app-router"
import { Component } from "solid-js"

import translations from "./translations"
import Content from "./Content"

import "./App.css"

const i18nContext = createI18nContext(translations, "en")

const App: Component = () => {
  return (
    <I18nContext.Provider value={i18nContext}>
      <Router>
        <Content />
      </Router>
    </I18nContext.Provider>
  )
}

export default App