import React from "react"
import styles from "../styles/main.module.scss"
import { Provider } from "../context/context"

const Layout = ({ children }) => {
  return <Provider>{children}</Provider>
}

export default Layout
