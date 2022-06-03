// Copyright (c) 2022 Ivan Teplov

import { useI18n } from "@solid-primitives/i18n"
import { Component } from "solid-js"

import Button from "../components/Button"
import Page from "../components/Page"
import Section from "../components/Section"
import Text from "../components/Text"

import UploadIcon from "../assets/icons/UploadIcon"

const Upload: Component = () => {
  const [t, _] = useI18n()

  return (
    <Page pageTitle={t("uploadPage.title")}>
      <Section class="fill text-center justify-center items-center">
        <Text textStyle="paragraph">{t("uploadPage.message")}</Text>
        <Button
          buttonStyle="primary"
          icon={<UploadIcon />}
          label={t("uploadPage.uploadMediaButtonText")}
        />
      </Section>
    </Page>
  )
}

export default Upload
