import React from "react"
import OverlayStyles from "../styles/overlay.module.scss"

const Overlay = () => {
  return (
    <div id="overlay-container" className={OverlayStyles.main}>
      <div id="overlay-slide" className={OverlayStyles.slide1} />
      <div id="overlay-slide" className={OverlayStyles.slide2} />
      <div id="overlay-slide" className={OverlayStyles.slide3} />
    </div>
  )
}

export default Overlay
