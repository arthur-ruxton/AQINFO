import React from 'react'
import { useState, useEffect } from 'react' 
import axios from 'axios'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { ExclamationTriangle } from 'react-bootstrap-icons';

const Warning = ({ location }) => {
  const [ warning, setWarning ] = useState('')

  useEffect(() => {
    const getAq = async () => {
      try {
        const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lng}&exclude=current,hourly,daily&appid=${process.env.REACT_APP_AQI_KEY}`)
        if(data.alerts){
          setWarning(data.alerts[0].description)
        } else {
          setWarning('Currently No Warnings')
        }
      } catch (error) {
        console.log(error)
      }
    }
    getAq()
  }, [location])

  const [showWarning, setShowWarning] = useState(false);
  const handleCloseWarning = () => setShowWarning(false);
  const handleShowWarning = () => setShowWarning(true);

  return (
    <>
      <Button onClick={handleShowWarning} className='button'>
        <ExclamationTriangle/>
      </Button>
      <Modal 
      show={showWarning} 
      onHide={handleCloseWarning} 
      size="lg" 
      className='popup'>
        <Modal.Header closeButton>
          <Modal.Title>Weather Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {warning}
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Warning
