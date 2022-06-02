// Copyright (c) 2022 Ivan Teplov

import classNames from "classnames"
import { ComponentProps, Component } from "solid-js"

import styles from "./Section.module.css"

type SectionProps = ComponentProps<"section">

const Section: Component<SectionProps> = ({ class: className, ...props }) => {
  const classes = classNames(className, styles.Section, "column")

  return <section class={classes} {...props} />
}

export default Section
