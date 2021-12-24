import React from 'react'
import { useState, useEffect } from 'react' 
import axios from 'axios'
import Plot from 'react-plotly.js';

const Aqi = () => {
  const [ aqi, setAqi ] = useState({})

  useEffect(() => {
    const getAq = async () => {
      try {
        const response = await axios.get('http://api.openweathermap.org/data/2.5/air_pollution?lat=0&lon=51&appid=1520d83412ce9ad4ab01ca7900640776')
        console.log('response', response.data.list[0].components)
        setAqi(response.data.list[0].components)
      } catch (error) {
        console.log(error)
      }
    }
    getAq()
  }, [])

  return (
    <div>
      <Plot 
        data={[
          {
            x: ['Carbon Monoxide', 'Nitrogen Oxide', 'Nitrogen Dioxide', 'Ozone', 'Sulphur Dioxide', 'Ammonia', 'PM2.5', 'PM10'],
            y: [aqi.co, aqi.no, aqi.no2, aqi.o3, aqi.so2, aqi.nh3, aqi.pm2_5, aqi.pm10],
            type: 'bar'
          }
        ]}
        layout={ {title: 'Local air quality', yaxis: {title: 'Pollutant concentration in μg/m3'}} }
      />
    </div>
  )
}

export default Aqi
