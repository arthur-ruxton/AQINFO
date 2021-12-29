import React from 'react'
import { useState, useEffect } from 'react' 
import axios from 'axios'

const Warning = ({ location }) => {
  const [ warning, setWarning ] = useState({})

  useEffect(() => {
    const getAq = async () => {
      try {
        const { data } = await axios.get(`http://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lng}&exclude=current,hourly,daily&appid=${process.env.REACT_APP_AQI_KEY}`)
        if(data.alerts){
          setWarning(data.alerts[0].description)
        } else {
          setWarning('No Weather Warnings')
        }
      } catch (error) {
        console.log(error)
      }
    }
    getAq()
  }, [location])


  console.log('warning response', warning)

  return (
    <div>
      <p>
        {warning}
      </p>
    </div>
  )
}

export default Warning
