// Copyright (c) 2022 Ivan Teplov

import { createFileUploader, UploadFile } from "@solid-primitives/upload"
import { Component, ComponentProps } from "solid-js"
import classNames from "classnames"

import Button from "../components/Button"
import Section from "../components/Section"

import UploadIcon from "../assets/icons/UploadIcon"

type UploadFileZoneProps = ComponentProps<typeof Section> & {
  acceptedFileTypes?: string[]
  onFileSelect?: (files: UploadFile[]) => void
  buttonLabel: string
}

// TODO: add drop zone
const UploadFileZone: Component<UploadFileZoneProps> = ({
  acceptedFileTypes = ["image/*", "video/*"],
  onFileSelect,
  buttonLabel,
  children,
  class: className,
  ...props
}) => {
  const classes = classNames(
    "fill text-center justify-center items-center",
    className
  )

  const { selectFiles } = createFileUploader({
    multiple: true,
    accept: acceptedFileTypes.join(","),
  })

  const onClickUploadButton = () => {
    selectFiles((files) => {
      if (files.length !== 0 && onFileSelect) {
        onFileSelect(files)
      }
    })
  }

  return (
    <Section class={classes} {...props}>
      {children}
      <Button
        buttonStyle="primary"
        icon={<UploadIcon />}
        label={buttonLabel}
        onClick={onClickUploadButton}
      />
    </Section>
  )
}

export default UploadFileZone
