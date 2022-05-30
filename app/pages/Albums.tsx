// Copyright (c) 2022 Ivan Teplov

import { useI18n } from "@solid-primitives/i18n"
import { Component } from "solid-js"

const Albums: Component = () => {
  const [t, _] = useI18n()

  return (
    <div>
      <h1>{t("albums")}</h1>
    </div>
  )
}

export default Albums
