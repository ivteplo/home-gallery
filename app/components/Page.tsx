// Copyright (c) 2022 Ivan Teplov

import classNames from "classnames"
import { Component, ComponentProps } from "solid-js"
import styles from "./Page.module.css"

type PageProps = ComponentProps<"div"> & {}

const Page: Component<PageProps> = ({ class: className, ...props }) => {
  const classes = classNames(className, styles.Page, "column", "fill")
  return <div class={classes} {...props} />
}

export default Page
