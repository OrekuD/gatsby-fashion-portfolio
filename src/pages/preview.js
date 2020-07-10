import React, { useEffect, useRef } from "react"
import styles from "../styles/preview.module.scss"
import gsap from "gsap"
import { images } from "../data/images"

const Preview = () => {
  const divRef = useRef()

  useEffect(() => {
    const tl = gsap.timeline()

    tl.from("#image", {
      delay: 0.8,
      duration: 0.8,
      opacity: 0,
    }).from("#image", {
      duration: 0.8,
      delay: -0.8,
      y: 50,
    })
  }, [])
  return (
    <div className={styles.main} ref={divRef}>
      {images.map(({ id, image }) => (
        <div key={id} className={styles.container}>
          <img src={image} alt="Sample" className={styles.image} id="image" />
        </div>
      ))}
    </div>
  )
}

export default Preview
