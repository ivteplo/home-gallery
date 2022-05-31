// Copyright (c) 2022 Ivan Teplov

import { useI18n } from "@solid-primitives/i18n"
import { Route, Routes } from "solid-app-router"
import { Component, createSignal, lazy } from "solid-js"

import NavigationBar from "./components/NavigationBar"

const Gallery = lazy(() => import("./pages/Gallery"))
const Upload = lazy(() => import("./pages/Upload"))
const Albums = lazy(() => import("./pages/Albums"))
const Settings = lazy(() => import("./pages/Settings"))

import GalleryIcon from "./icons/GalleryIcon"
import UploadIcon from "./icons/UploadIcon"
import AlbumsIcon from "./icons/AlbumsIcon"
import SettingsIcon from "./icons/SettingsIcon"

const Content: Component = () => {
  const [t, _] = useI18n()

  const [tabs, _setTabs] = createSignal([
    {
      name: t("gallery"),
      icon: () => <GalleryIcon />,
      route: "/",
    },
    {
      name: t("upload"),
      icon: () => <UploadIcon />,
      route: "/upload",
    },
    {
      name: t("albums"),
      icon: () => <AlbumsIcon />,
      route: "/albums",
    },
    {
      name: t("settings"),
      icon: () => <SettingsIcon />,
      route: "/settings",
    },
  ])

  return (
    <div class="column fill">
      <Routes>
        <Route path="/upload" element={<Upload />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/" element={<Gallery />} />
      </Routes>
      <NavigationBar tabs={tabs()} />
    </div>
  )
}

export default Content
