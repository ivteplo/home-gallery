// Copyright (c) 2022 Ivan Teplov

import { useI18n } from "@solid-primitives/i18n"
import { Component } from "solid-js"
import Page from "../components/Page"
import Text from "../components/Text"

const Settings: Component = () => {
  const [t, _] = useI18n()

  return (
    <Page>
      <Text textStyle="largeTitle">{t("settings")}</Text>
    </Page>
  )
}

export default Settings
