// Copyright (c) 2022 Ivan Teplov

import { Component, createSignal, For, onMount, Switch, Match } from "solid-js"
import { createFileUploader } from "@solid-primitives/upload"
import { useI18n } from "@solid-primitives/i18n"

import APIResponse from "../models/APIResponse"

import Button from "../components/Button"
import Page from "../components/Page"
import Section from "../components/Section"
import Text from "../components/Text"

import UploadIcon from "../assets/icons/UploadIcon"

const UploadFile: Component<{ file: File }> = ({ file }) => {
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

const Uploading: Component<{ files: File[] }> = ({ files }) => {
  const [t, _] = useI18n()

  return (
    <Page pageTitle={t("uploadPage.title")}>
      <Section class="fill">
        <For each={files}>{(file) => <UploadFile file={file} />}</For>
      </Section>
    </Page>
  )
}

const createFormDataForUpload = (file?: File) => {
  const body = new FormData()

  if (file) {
    body.append("uploadedFile", file)
  }

  return body
}

const Upload: Component = () => {
  const { files, selectFiles } = createFileUploader({
    multiple: true,
    accept: "image/*,video/*",
  })

  const [isUploading, setIsUploading] = createSignal(false)
  const [t, _] = useI18n()

  const onClickUploadButton = () => {
    selectFiles((files) => {
      if (files.length !== 0) {
        setIsUploading(true)
      }
    })
  }

  return <Switch>
    <Match when={isUploading()}>
      <Uploading files={files().map(({ file }) => file)} />
    </Match>
    <Match when={true}>
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
    </Match>
  </Switch>
}

export default Upload
