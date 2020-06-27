import React, { useState } from "react"
import HeaderStyles from "../styles/header.module.scss"
import { openMenu, closeMenu } from "../animations/menuAnimations"

const Header = () => {
  const [open, setOpen] = useState(true)
  const func = () => {
    if (open) {
      openMenu()
      setOpen(false)
    } else {
      closeMenu()
      setOpen(true)
    }
  }

  return (
    <header id="header">
      <div className={HeaderStyles.left}>
        <h3 className={HeaderStyles.title}> opoku </h3>
      </div>
      <div className={HeaderStyles.right}>
        <div onClick={func} className={HeaderStyles.burger}>
          <div id="slide-top" className={HeaderStyles.sliceTop} />
          <div id="slide-bottom" className={HeaderStyles.sliceBottom} />
        </div>
      </div>
    </header>
  )
}

export default Header
