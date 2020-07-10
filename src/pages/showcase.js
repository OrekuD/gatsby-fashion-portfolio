import React from "react"
import AwesomeSlider from "react-awesome-slider"
import "react-awesome-slider/dist/styles.css"
import styles from "../styles/showcase.module.scss"
import { images } from "../data/images"

const Showcase = () => {
  return (
    <AwesomeSlider
      fillParent
      bullets={false}
      infinite
      mobileTouch
      className={styles.main}
    >
      {images.map(({ image }, index) => (
        <div key={index}>
          <img src={image} className={styles.img} alt="Preview" />
        </div>
      ))}
    </AwesomeSlider>
  )
}

export default Showcase
