import React from "react"
import AwesomeSlider from "react-awesome-slider"
import Img from "gatsby-image"
import "react-awesome-slider/dist/styles.css"
import styles from "../styles/showcase.module.scss"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import { images } from "../data/images"

const Showcase = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "1.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div className={styles.main} id="main">
        <AwesomeSlider fillParent>
          {images.map(({ image }) => (
            <div>
              <img src={image} className={styles.img} />
            </div>
          ))}
        </AwesomeSlider>
      </div>
    </Layout>
  )
}

export default Showcase
