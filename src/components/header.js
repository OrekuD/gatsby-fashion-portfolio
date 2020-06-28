import React, { useContext } from "react"
import HeaderStyles from "../styles/header.module.scss"
import { openMenu, closeMenu } from "../animations/menuAnimations"
import { Context } from "../context/context"

const Header = () => {
  const { open, setOpen } = useContext(Context)

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
      <h3 className={HeaderStyles.title}> doryameo </h3>
      <div onClick={func} className={HeaderStyles.burger}>
        <div id="slide-top" className={HeaderStyles.sliceTop} />
        <div id="slide-bottom" className={HeaderStyles.sliceBottom} />
      </div>
    </header>
  )
}

export default Header
