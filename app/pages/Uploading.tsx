// Copyright (c) 2022 Ivan Teplov

import { Component, createSignal, For, onMount } from "solid-js"
import { useI18n } from "@solid-primitives/i18n"
import { useNavigate } from "solid-app-router"

import { useFileUploadingContext } from "../contexts/FileUploadingContext"
import APIResponse from "../models/APIResponse"

import Page from "../components/Page"
import Section from "../components/Section"

const UploadingFileListItem: Component<{ file: File }> = ({ file }) => {
  const [state, setState] = createSignal<"uploading" | "success" | "error">(
    "uploading"
  )

  // TODO: error handling
  const uploadFile = async () => {
    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: createFormDataForUpload(file),
      })

      const jsonResponse: APIResponse = await response.json()
      setState(jsonResponse.type)

      if (jsonResponse.type === "error") {
        console.error(jsonResponse)
      } else {
        console.log(jsonResponse)
      }
    } catch (error) {
      console.error(error)
      setState("error")
    }
  }

  onMount(() => {
    uploadFile()
  })

  return (
    <div class="row">
      {state()} {file.name}
    </div>
  )
}


const createFormDataForUpload = (file?: File) => {
  const body = new FormData()

  if (file) {
    body.append("uploadedFile", file)
  }

  return body
}

const Uploading: Component = () => {
  const { uploadedFiles } = useFileUploadingContext()!
  const navigate = useNavigate()
  const [t, _] = useI18n()

  if (uploadedFiles().length === 0) {
    navigate("/")
  }

  return (
    <Page pageTitle={t("uploadPage.title")}>
      <Section class="fill">
        <For each={uploadedFiles()}>{(file) => <UploadingFileListItem file={file.file} />}</For>
      </Section>
    </Page>
  )
}

export default Uploading
