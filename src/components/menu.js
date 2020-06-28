import React, { useContext } from "react"
import MenuStyles from "../styles/menu.module.scss"
import { navigate } from "gatsby"
import { closeMenu } from "../animations/menuAnimations"
import { Context } from "../context/context"

const Menu = () => {
  const { setOpen, open } = useContext(Context)

  const goTo = destination => {
    setOpen(!open)
    closeMenu()
    setTimeout(() => {
      navigate(destination)
    }, 500)
  }

  return (
    <div id="menu-container" className={MenuStyles.main}>
      <p onClick={() => goTo("/")}> Home </p>
      <p onClick={() => goTo("#about-container")}> About me </p>
      <p onClick={() => goTo("/showcase")}> Showcase </p>
      <p onClick={() => goTo("/contact")}> Contact </p>
    </div>
  )
}

export default Menu
