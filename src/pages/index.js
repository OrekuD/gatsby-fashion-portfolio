import React, { useEffect } from "react"
import Header from "../components/header"
import Overlay from "../components/overlay"
import Banner from "../components/banner"
import gsap from "gsap"
import Menu from "../components/menu"
import Contact from "../components/contact"
import About from "../components/about"
import styles from "../styles/main.module.scss"

const IndexPage = () => {
  useEffect(() => {
    gsap.to("body", 0, { css: { visibility: "visible" } })

    const tl = gsap.timeline()

    tl.from("#banner-text", {
      duration: 1.5,
      css: { letterSpacing: "2rem" },
    })
      .to("#overlay-slide", {
        duration: 1.6,
        height: 0,
        ease: "expo.inOut",
        stagger: {
          amount: 0.1,
        },
      })
      .from("#about-title", {
        duration: 1.6,
        y: 100,
        ease: "power4.out",
        delay: -1,
        skewY: 2,
        stagger: {
          amount: 0.5,
        },
      })
      .to("#header", {
        duration: 0,
        css: { visibility: "visible" },
        delay: -0.3,
      })
      .to("#overlay-slide", {
        duration: 0,
        css: { display: "none" },
      })
      .to("html", {
        duration: 0,
        css: {
          overflowY: "scroll",
        },
      })
  }, [])

  return (
    <div id="index-main-container">
      <Overlay />
      <Menu />
      <Header />
      <div id="main-container">
        <Banner />
        <About />
        <Contact />
      </div>
    </div>
  )
}

export default IndexPage
