import React, { useEffect } from "react"
import AboutStyles from "../styles/about.module.scss"
import { useInView } from "react-intersection-observer"
import { about } from "../data/about"
import gsap from "gsap"

const About = () => {
  const [aboutRef, inView] = useInView({
    triggerOnce: false,
    rootMargin: "-40px",
  })

  useEffect(() => {
    if (inView) {
      fadeIn()
    } else {
      fadeOut()
    }
  }, [inView])

  const tl = gsap.timeline()

  const fadeIn = () => {
    tl.to("#about-content", {
      duration: 1,
      ease: "power4.out",
      y: -70,
    })
  }

  const fadeOut = () => {
    tl.to("#about-content", {
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
      <p ref={aboutRef} id="about-content" className={AboutStyles.content}>
        {about}
      </p>
    </div>
  )
}

export default About
