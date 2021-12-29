import React from 'react'
import { Globe } from 'react-bootstrap-icons';

const Header = () => {
  return (
    <div className='header-div'>
      <div className='logo-div'>
        <h1><Globe className='App-logo'/></h1>
        <h2>AQINFO.</h2>
      </div>
      <p className="h6">air quality information.</p>
    </div>
  )
}

export default Header
