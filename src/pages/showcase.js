import React from "react"
import AwesomeSlider from "react-awesome-slider"
import "react-awesome-slider/dist/styles.css"
import styles from "../styles/showcase.module.scss"
import { images } from "../data/images"

const Showcase = () => {
  return (
    <div className={styles.main} id="main">
      <AwesomeSlider fillParent>
        {images.map(image => (
          <div>
            <img src={image.image} alt="dfghj" />
          </div>
        ))}
      </AwesomeSlider>
    </div>
  )
}

export default Showcase
