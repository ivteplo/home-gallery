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
    <Page pageTitle={t("settingsPage.title")}>
      <SettingsSection sectionTitle={t("settingsPage.sections.media.title")}>
        <div class="row">
          <Text>
            {t(
              "settingsPage.sections.media.settings.cacheImagesAndVideos.name"
            )}
          </Text>
          <div class="fill" />
          <Checkbox checked />
        </div>
        <div class="row">
          <Text>
            {t("settingsPage.sections.media.settings.cacheBigFiles.name")}
          </Text>
          <div class="fill" />
          <Checkbox />
        </div>
      </SettingsSection>
      <SettingsSection sectionTitle={t("settingsPage.sections.albums.title")}>
        <div class="row">
          <Text>
            {t(
              "settingsPage.sections.albums.settings.createAlbumsForEachYear.name"
            )}
          </Text>
          <div class="fill" />
          <Checkbox checked />
        </div>
        <div class="row">
          <Text>
            {t("settingsPage.sections.albums.settings.enableFavorites.name")}
          </Text>
          <div class="fill" />
          <Checkbox checked />
        </div>
      </SettingsSection>
    </Page>
  )
}

export default Settings
