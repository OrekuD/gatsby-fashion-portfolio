import React from "react"
import FooterStyles from "../styles/footer.module.scss"

const Footer = () => {
  return (
    <footer className={FooterStyles.main}>
      <p>
        &copy; {new Date().getFullYear()} <span> Dorinda Opoku </span> All
        rights reserved
      </p>
    </footer>
  )
}

export default Footer
