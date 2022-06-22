// Copyright (c) 2022 Ivan Teplov

import { useI18n } from "@solid-primitives/i18n"
import { Component } from "solid-js"

import Page from "../components/Page"
import Text from "../components/Text"

import UploadFileZone from "../components/UploadFileZone"
import { useFileUploadingContext } from "../contexts/FileUploadingContext"


const Gallery: Component = () => {
  const { setUploadedFiles } = useFileUploadingContext()!
  const [t, _] = useI18n()

  return (
    <Page pageTitle={t("galleryPage.title")}>
      <UploadFileZone
        buttonLabel={t("galleryPage.emptyGallery.uploadButtonText")}
        onFileSelect={(files) => setUploadedFiles(files)}
      >
        <Text textStyle="paragraph">
          {t("galleryPage.emptyGallery.shownMessage")}
        </Text>
      </UploadFileZone>
    </Page>
  )
}

export default Gallery
