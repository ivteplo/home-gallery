// Copyright (c) 2022 Ivan Teplov

import { createFileUploader } from "@solid-primitives/upload"
import { useI18n } from "@solid-primitives/i18n"
import { Component } from "solid-js"

import APIResponse from "../models/APIResponse"

import Button from "../components/Button"
import Page from "../components/Page"
import Section from "../components/Section"
import Text from "../components/Text"

import UploadIcon from "../assets/icons/UploadIcon"

const createFormDataForUpload = (file?: File) => {
  const body = new FormData()

  if (file) {
    body.append("uploadedFile", file)
  }

  return body
}

const Upload: Component = () => {
  const { selectFiles } = createFileUploader({
    accept: "image/*,video/*",
  })

  const [t, _] = useI18n()

  // TODO: error handling
  const uploadFiles = async (file: File) => {
    const response = await fetch("/api/upload", {
      method: "POST",
      body: createFormDataForUpload(file)
    })

    const jsonResponse: APIResponse = await response.json()
    console.log(jsonResponse)
  }

  const onClickUploadButton = () => {
    selectFiles((files) => {
      if (files.length !== 0) {
        uploadFiles(files[0].file)
      }
    })
  }

  return (
    <Page pageTitle={t("uploadPage.title")}>
      <Section class="fill text-center justify-center items-center">
        <Text textStyle="paragraph">{t("uploadPage.message")}</Text>
        <Button
          buttonStyle="primary"
          icon={<UploadIcon />}
          label={t("uploadPage.uploadMediaButtonText")}
          onClick={onClickUploadButton}
        />
      </Section>
    </Page>
  )
}

export default Upload
