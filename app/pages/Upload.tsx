// Copyright (c) 2022 Ivan Teplov

import { useI18n } from "@solid-primitives/i18n"
import { Component } from "solid-js"

import { useFileUploadingContext } from "../contexts/FileUploadingContext"

import UploadFileZone from "../components/UploadFileZone"
import Page from "../components/Page"
import Text from "../components/Text"

const Upload: Component = () => {
  const { setUploadedFiles } = useFileUploadingContext()!
  const [t, _] = useI18n()

  return (
    <Page pageTitle={t("uploadPage.title")}>
      <UploadFileZone onFileSelect={files => setUploadedFiles(files)} buttonLabel={t("uploadPage.uploadMediaButtonText")}>
        <Text textStyle="paragraph">{t("uploadPage.message")}</Text>
      </UploadFileZone>
    </Page>
  )
}

export default Upload
