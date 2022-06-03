// Copyright (c) 2022 Ivan Teplov

import classNames from "classnames"
import { Component, ComponentProps, createSignal } from "solid-js"

import styles from "./Checkbox.module.css"

type CheckboxProps = ComponentProps<"label"> & {
  checked?: boolean
  onChange?: (currentValue: boolean) => void
}

const Checkbox: Component<CheckboxProps> = ({
  checked = false,
  class: className,
  onChange,
  ...props
}) => {
  const [isChecked, setIsChecked] = createSignal(checked)
  const classes = classNames("cursor-pointer", styles.Checkbox, className)

  const changeHandler = () => {
    const newValue = !isChecked()
    setIsChecked(newValue)
    onChange?.(newValue)
  }

  return (
    <label
      class={classes}
      classList={{ [styles.checked]: isChecked() }}
      {...props}
    >
      <input
        type="checkbox"
        onChange={changeHandler}
        checked={isChecked()}
        class={styles.NativeCheckbox}
      />
    </label>
  )
}

export default Checkbox
