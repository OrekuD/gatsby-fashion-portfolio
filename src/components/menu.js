import React from "react"
import MenuStyles from "../styles/menu.module.scss"
import { navigate } from "gatsby"
import { closeMenu } from "../animations/menuAnimations"

const Menu = () => {
  const goTo = destination => {
    closeMenu()
    setTimeout(() => {
      navigate(destination)
    }, 500)
  }

  return (
    <div id="menu-container" className={MenuStyles.main}>
      <h1 onClick={() => goTo("/")}> Home </h1>
      <h1 onClick={() => goTo("#about-container")}> About me </h1>
      <h1 onClick={() => goTo("/showcase")}> Showcase </h1>
      <h1 onClick={() => goTo("/contact")}> Contact </h1>
    </div>
  )
}

export default Menu
