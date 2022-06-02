// Copyright (c) 2022 Ivan Teplov

import { useI18n } from "@solid-primitives/i18n"
import { Component } from "solid-js"
import Page from "../components/Page"

const Albums: Component = () => {
  const [t, _] = useI18n()

  return <Page pageTitle={t("albums")}></Page>
}

export default Albums
