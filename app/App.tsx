// Copyright (c) 2022 Ivan Teplov

import { createI18nContext, I18nContext } from "@solid-primitives/i18n"
import { Route, Router, Routes } from "solid-app-router"
import { Component, lazy } from "solid-js"
import translations from "./translations"

const Upload = lazy(() => import("./pages/Upload"))
const Albums = lazy(() => import("./pages/Albums"))
const Settings = lazy(() => import("./pages/Settings"))
const Gallery = lazy(() => import("./pages/Gallery"))

const Content: Component = () => {
  return (
    <div class="column fill">
      <Routes>
        <Route path="/upload" element={<Upload />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/" element={<Gallery />} />
      </Routes>
    </div>
  )
}

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
