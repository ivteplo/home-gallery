// Copyright (c) 2022 Ivan Teplov

import { useI18n } from "@solid-primitives/i18n"
import { Component } from "solid-js"

const Upload: Component = () => {
  const [t, _] = useI18n()

  return (
    <div>
      <h1>{t("upload")}</h1>
    </div>
  )
}

export default Upload