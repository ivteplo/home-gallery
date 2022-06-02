// Copyright (c) 2022 Ivan Teplov

import classNames from "classnames"
import { Component, ComponentProps, JSX } from "solid-js"

import styles from "./Button.module.css"
import Text from "./Text"

type ButtonProps = ComponentProps<"button"> & {
  buttonStyle: "primary" | "default"
  icon?: JSX.Element
  label?: string
}

const Button: Component<ButtonProps> = ({
  class: className,
  buttonStyle = "default",
  icon,
  label,
  children,
  ...props
}) => {
  const classes = classNames(className, styles.Button, styles[buttonStyle], "row", "cursor-pointer")

  return <button class={classes} {...props}>
    {icon}
    {label && <Text textStyle="button">{label}</Text>}
    {children}
  </button>
}

export default Button
