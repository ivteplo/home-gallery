// Copyright (c) 2022 Ivan Teplov

import classNames from "classnames"
import { Component, ComponentProps } from "solid-js"

import Album from "../models/Album"
import Text from "./Text"

import styles from "./AlbumListItem.module.css"

type AlbumListItemProps = ComponentProps<"div"> & {
  album: Album
}

const AlbumListItem: Component<AlbumListItemProps> = ({
  album,
  class: className,
  ...props
}) => {
  const classes = classNames(styles.AlbumListItem, className)
  const alternativeText = `Cover of '${album.title}' album`

  return (
    <div class={classes} {...props}>
      <img src={album.cover} alt={alternativeText} />
      <div class={styles.Overlay} />
      <Text textStyle="button" class={styles.AlbumTitle}>
        {album.title}
      </Text>
    </div>
  )
}

export default AlbumListItem
