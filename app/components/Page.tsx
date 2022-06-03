// Copyright (c) 2022 Ivan Teplov

import classNames from "classnames"
import { Component, ComponentProps } from "solid-js"
import styles from "./Page.module.css"
import Text from "./Text"

type PageProps = ComponentProps<"div"> & {
  pageTitle?: string
}

const Page: Component<PageProps> = ({
  class: className,
  pageTitle,
  children,
  ...props
}) => {
  const classes = classNames(styles.Page, "column", "fill", className)

  return (
    <div class={classes} {...props}>
      {pageTitle && <Text textStyle="largeTitle">{pageTitle}</Text>}
      {children}
    </div>
  )
}

export default Page
