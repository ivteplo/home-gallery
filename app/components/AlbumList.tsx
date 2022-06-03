// Copyright (c) 2022 Ivan Teplov

import classNames from "classnames"
import { Component, ComponentProps, For } from "solid-js"

import Album from "../models/Album"
import AlbumListItem from "./AlbumListItem"

import styles from "./AlbumList.module.css"

type AlbumListProps = ComponentProps<"div"> & {
  albums: Album[]
}

const AlbumList: Component<AlbumListProps> = ({
  albums,
  class: className,
  ...props
}) => {
  const classes = classNames(styles.AlbumList, className)

  return (
    <div class={classes} {...props}>
      <For each={albums}>
        {(album) => (
          <AlbumListItem album={album} class={styles.AlbumListItem} />
        )}
      </For>
    </div>
  )
}

export default AlbumList
