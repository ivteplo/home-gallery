// Copyright (c) 2022 Ivan Teplov

import { useI18n } from "@solid-primitives/i18n"
import { Component } from "solid-js"
import Page from "../components/Page"

const Upload: Component = () => {
  const [t, _] = useI18n()

  return <Page pageTitle={t("upload")}></Page>
}

export default Upload
