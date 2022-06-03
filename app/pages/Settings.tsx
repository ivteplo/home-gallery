// Copyright (c) 2022 Ivan Teplov

import { useI18n } from "@solid-primitives/i18n"
import { Component } from "solid-js"

import SettingsSection from "../components/SettingsSection"
import Checkbox from "../components/Checkbox"
import Page from "../components/Page"
import Text from "../components/Text"

const Settings: Component = () => {
  const [t, _] = useI18n()

  return (
    <Page pageTitle={t("settings")}>
      <SettingsSection sectionTitle={t("media")}>
        <div class="row">
          <Text>{t("cacheImagesAndVideos")}</Text>
          <div class="fill" />
          <Checkbox checked />
        </div>
        <div class="row">
          <Text>{t("cacheBigFiles")}</Text>
          <div class="fill" />
          <Checkbox />
        </div>
      </SettingsSection>
      <SettingsSection sectionTitle={t("albums")}>
        <div class="row">
          <Text>{t("createAlbumsForEachYear")}</Text>
          <div class="fill" />
          <Checkbox checked />
        </div>
        <div class="row">
          <Text>{t("enableFavorites")}</Text>
          <div class="fill" />
          <Checkbox checked />
        </div>
      </SettingsSection>
    </Page>
  )
}

export default Settings
