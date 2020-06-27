import React from "react"
import BannerStyles from "../styles/banner.module.scss"

const Banner = () => {
  return (
    <div id="banner-container" className={BannerStyles.main}>
      <p id="banner-text" className={BannerStyles.text}>
        dorinda | opoku
      </p>
      <p id="banner-subText" className={BannerStyles.subText}>
        a fashion designer
      </p>
    </div>
  )
}

export default Banner
