// Copyright (c) 2022 Ivan Teplov

import { Link, useMatch } from "solid-app-router"
import { Component, For, JSX } from "solid-js"

import styles from "./NavigationBar.module.css"

type TabInfo = {
  name: string
  icon: () => JSX.Element
  route: string
}

type NavigationBarButtonProps = {
  tab: TabInfo
}

type NavigationBarProps = {
  tabs: TabInfo[]
  fixed?: boolean
}

const NavigationBarButton: Component<NavigationBarButtonProps> = ({ tab }) => {
  const isCurrentTab = useMatch(() => tab.route)

  return (
    <Link
      href={tab.route}
      class={styles.NavigationBarButton}
      classList={{ [styles.current]: Boolean(isCurrentTab()) }}
    >
      {tab.icon()}
      <span>{tab.name}</span>
    </Link>
  )
}

const NavigationBar: Component<NavigationBarProps> = (props) => {
  return (
    <nav class={styles.NavigationBar} classList={{ [styles.fixed]: !!props.fixed }}>
      <For each={props.tabs}>
        {(tab, _) => <NavigationBarButton tab={tab} />}
      </For>
    </nav>
  )
}

export default NavigationBar
