// Copyright (c) 2022 Ivan Teplov

import { useI18n } from "@solid-primitives/i18n"
import { Component } from "solid-js"
import Text from "../components/Text"

const Gallery: Component = () => {
  const [t, _] = useI18n()

  return (
    <div>
      <Text textStyle="largeTitle">{t("gallery")}</Text>
    </div>
  )
}

export default Gallery
