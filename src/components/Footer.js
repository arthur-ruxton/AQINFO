import React from 'react'
import { Github, Linkedin, Instagram } from 'react-bootstrap-icons'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p className='creator-p'>A.Ruxton Project</p>
      <p className='social-links'>
        <a target="_blank" rel="noreferrer" href="https://github.com/arthur-ruxton">
          <Github />
        </a>
        <a
          target="_blank" rel="noreferrer"
          href="https://www.linkedin.com/in/arthur-ed-ruxton-5b3396220/"
        >
          <Linkedin />
        </a>
        <a
          target="_blank" rel="noreferrer"
          href="https://www.instagram.com/ae.ruxton/"
        >
          <Instagram />
        </a>
      </p>
    </div>
  )
}

export default Footer