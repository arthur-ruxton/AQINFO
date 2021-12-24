import React from 'react'
import { useState, useEffect } from 'react' 
import axios from 'axios'

const Aqi = () => {
  const [ data, setData ] = useState({})

  useEffect(() => {
    const getAq = async () => {
      try {
        const response = await axios.get('http://api.openweathermap.org/data/2.5/air_pollution?lat=0&lon=51&appid=1520d83412ce9ad4ab01ca7900640776')
        console.log('response', response.data.list[0].components)
        setData(response.data.list[0].components)
      } catch (error) {
        console.log(error)
      }
    }
    getAq()
  }, [])

  return (
    <div>
      <p>
        Carbon monoxide = {data.co}
      </p>
      <p>
        Nitrogen monoxide = {data.no}
      </p>
      <p>
        Nitrogen dioxide = {data.no2}
      </p>
      <p>
        Ozone = {data.o3}
      </p>
      <p>
        Sulphur dioxide = {data.so2}
      </p>
      <p>
        Ammonia = {data.nh3}
      </p>
      <p>
        Particulates; PM2.5: {data.pm2_5}, PM10: {data.pm10}
      </p>
    </div>
  )
}

export default Aqi
