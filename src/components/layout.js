import React from "react"
import Header from "../components/header"
import Menu from "../components/menu"
import Footer from "../components/footer"
import styles from "../styles/main.module.scss"
import { Provider } from "../context/context"

const Layout = ({ children }) => {
  return (
    <Provider>
      <Menu />
      <Header />
      <div className={styles.main}>
        <div id="main-container" className={styles.container}>
          {children}
        </div>
        <Footer />
      </div>
    </Provider>
  )
}

export default Layout
