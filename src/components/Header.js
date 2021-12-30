import React from 'react'
import { Globe } from 'react-bootstrap-icons';
import Donate from './Donate'

const Header = () => {
  return (
   <div className='total-header'>
    <div className='main-header-div'>
      <div className='logo-div'>
        <h1><Globe className='App-logo'/></h1>
        <h2>AQINFO.</h2>
      </div>
      <p className="h6">air quality information.</p>
    </div>
    <Donate />
   </div>
  )
}

export default Header
