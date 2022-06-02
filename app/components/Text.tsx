// Copyright (c) 2022 Ivan Teplov

import { Component, ComponentProps } from "solid-js"
import { Dynamic } from "solid-js/web"

import styles from "./Text.module.css"

type TextStyle = "largeTitle" | "title" | "button" | "paragraph" | "text"

type TextProps = ComponentProps<'span'> & {
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

const Text: Component<TextProps> = ({ textStyle = 'text', class: className = "", children, ...props }) => {
  const tag = getTagFor(textStyle)

  return <Dynamic component={tag} class={className + " " + styles[textStyle]} {...props}>
    {children}
  </Dynamic>
}

export default Text
