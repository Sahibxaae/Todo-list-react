import './Footer.css'
import React from 'react'

const Footer = () => {
    const year = new Date();
  return (
    <footer>
        <p>&copy; Copyrights {year.getFullYear()}</p>
    </footer>
  )
}

export default Footer