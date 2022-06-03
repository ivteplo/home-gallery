// Copyright (c) 2022 Ivan Teplov

import { useI18n } from "@solid-primitives/i18n"
import { Component, createSignal } from "solid-js"

import Page from "../components/Page"

import mockAlbumCover from "../assets/mockImages/albumCover.jpg"
import AlbumList from "../components/AlbumList"
import Album from "../models/Album"

const getMockAlbum: () => Album = () => ({
  cover: mockAlbumCover,
  title: "2022",
})

const Albums: Component = () => {
  const [t, _] = useI18n()
  const [albums, setAlbums] = createSignal(
    Array(4)
      .fill(null)
      .map(() => getMockAlbum())
  )

  return (
    <Page pageTitle={t("albumsPage.title")}>
      <AlbumList albums={albums()} />
    </Page>
  )
}

export default Albums
