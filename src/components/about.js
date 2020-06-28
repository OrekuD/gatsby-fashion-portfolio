import React, { useEffect, useRef } from "react"
import AboutStyles from "../styles/about.module.scss"
import { useInView } from "react-intersection-observer"
import { about } from "../data/about"
import gsap from "gsap"
import Image from "../images/6.jpg"

const About = () => {
  const [aboutRef, inView] = useInView({
    triggerOnce: false,
    rootMargin: "-40px",
  })

  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    rootMargin: "-40px",
  })

  useEffect(() => {
    if (inView) {
      fadeIn()
    } else {
      fadeOut()
    }
  }, [inView])

  useEffect(() => {
    if (imageInView) {
      imageTransition()
    }
  }, [imageInView])

  const imageTransition = () => {
    const tl = gsap.timeline()

    tl.to("#image-overlay", {
      duration: 1.3,
      delay: 0.2,
      translateX: "100%",
    }).from("#image-hero", {
      duration: 1.3,
      delay: -1.5,
      scale: 1.4,
    })
  }

  const fadeIn = () => {
    gsap.to("#about-content", {
      duration: 1,
      ease: "power4.out",
      y: -70,
    })
  }

  const fadeOut = () => {
    gsap.to("#about-content", {
      duration: 0.5,
      y: 0,
      //opacity: 0.6,
    })
  }

  //intersection && intersection.intersectionRatio < 0.05 ? fadeOut() : fadeIn()

  return (
    <div id="about-container" className={AboutStyles.main}>
      <span id="about-title" className={AboutStyles.title}>
        about
      </span>
      <span id="about-title" className={AboutStyles.title}>
        me
      </span>
      <div ref={aboutRef} id="about-content" className={AboutStyles.container}>
        <p className={AboutStyles.content}>{about}</p>
        <div ref={imageRef} className={AboutStyles.image}>
          <img id="image-hero" src={Image} alt="Thumbnail" />
          <div id="image-overlay" className={AboutStyles.overlay} />
        </div>
      </div>
    </div>
  )
}

export default About
