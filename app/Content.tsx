// Copyright (c) 2022 Ivan Teplov

import { useI18n } from "@solid-primitives/i18n"
import { Route, Routes } from "solid-app-router"
import { Component, createSignal, lazy } from "solid-js"

import NavigationBar from "./components/NavigationBar"

const Gallery = lazy(() => import("./pages/Gallery"))
const Upload = lazy(() => import("./pages/Upload"))
const Albums = lazy(() => import("./pages/Albums"))
const Settings = lazy(() => import("./pages/Settings"))

import GalleryIcon from "./assets/icons/GalleryIcon"
import UploadIcon from "./assets/icons/UploadIcon"
import AlbumsIcon from "./assets/icons/AlbumsIcon"
import SettingsIcon from "./assets/icons/SettingsIcon"

const Content: Component = () => {
  const [t, _] = useI18n()

  const [tabs, _setTabs] = createSignal([
    {
      name: t("navigationBar.galleryButtonText"),
      icon: () => <GalleryIcon />,
      route: "/",
    },
    {
      name: t("navigationBar.uploadButtonText"),
      icon: () => <UploadIcon />,
      route: "/upload",
    },
    {
      name: t("navigationBar.albumsButtonText"),
      icon: () => <AlbumsIcon />,
      route: "/albums",
    },
    {
      name: t("navigationBar.settingsButtonText"),
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
      <NavigationBar tabs={tabs()} fixed />
    </div>
  )
}

export default Content
