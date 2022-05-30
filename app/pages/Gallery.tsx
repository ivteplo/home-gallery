// Copyright (c) 2022 Ivan Teplov

import { useI18n } from "@solid-primitives/i18n"
import { Component } from "solid-js"

const Gallery: Component = () => {
  const [t, _] = useI18n()

  return (
    <div>
      <h1>{t("gallery")}</h1>
    </div>
  )
}

export default Gallery
