// Copyright (c) 2022 Ivan Teplov

import classNames from "classnames"
import { Component, ComponentProps } from "solid-js"
import { Dynamic } from "solid-js/web"

import styles from "./Text.module.css"

type TextStyle = "largeTitle" | "title" | "button" | "paragraph" | "text"

type TextProps = ComponentProps<"span"> & {
  textStyle: TextStyle
}

const getTagFor = (textStyle: TextStyle): string => {
  switch (textStyle) {
    case "largeTitle":
      return "h1"
    case "title":
      return "h2"
    case "paragraph":
      return "p"
    case "button":
    case "text":
      return "span"
  }
}

const Text: Component<TextProps> = ({
  textStyle = "text",
  class: className,
  children,
  ...props
}) => {
  const tag = getTagFor(textStyle)
  const classes = classNames(styles[textStyle], className)

  return (
    <Dynamic component={tag} class={classes} {...props}>
      {children}
    </Dynamic>
  )
}

export default Text
