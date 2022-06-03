// Copyright (c) 2022 Ivan Teplov

import classNames from "classnames"
import { Component, ComponentProps } from "solid-js"

import Section from "./Section"
import Text from "./Text"

import styles from "./SettingsSection.module.css"

type SettingsSectionProps = ComponentProps<typeof Section> & {
  sectionTitle: string
  contentWrapperClass?: string
}

const SettingsSection: Component<SettingsSectionProps> = ({
  class: className,
  children,
  sectionTitle,
  contentWrapperClass,
  ...props
}) => {
  const classes = classNames(/*styles.SettingsSection,*/ className)
  const contentWrapperClasses = classNames(
    "column",
    styles.ContentWrapper,
    contentWrapperClass
  )

  return (
    <Section class={classes} {...props}>
      <Text textStyle="title">{sectionTitle}</Text>
      <div class={contentWrapperClasses}>{children}</div>
    </Section>
  )
}

export default SettingsSection
