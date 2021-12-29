import React from 'react'
import { useState, useEffect } from 'react' 
import axios from 'axios'
import Plot from 'react-plotly.js';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { BarChart } from 'react-bootstrap-icons';

const Plotter = ({ location }) => {
  const [ aqi, setAqi ] = useState({})

  useEffect(() => {
    const getAq = async () => {
      try {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${location.lat}&lon=${location.lng}&appid=${process.env.REACT_APP_AQI_KEY}`)
        console.log('response', response.data.list[0].components)
        setAqi(response.data.list[0].components)
      } catch (error) {
        console.log(error)
      }
    }
    getAq()
  }, [location])

  const [showAqi, setShowAqi] = useState(false);
  const handleCloseAqi = () => setShowAqi(false);
  const handleShowAqi = () => setShowAqi(true);

  return (
    <>
      <Button onClick={handleShowAqi} className="button">
        <BarChart/> AQI
      </Button>
      <Modal 
      show={showAqi} 
      onHide={handleCloseAqi} 
      size="lg" 
      className='popup'
      id='chart-modal'>
        <Modal.Header closeButton>
          <Modal.Title>Local air quality</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Plot 
            data={[
              {
                x: ['CO', 'NO', 'NO2', 'O', 'SO2', 'NH3', 'PM2.5', 'PM10'],
                y: [aqi.co, aqi.no, aqi.no2, aqi.o3, aqi.so2, aqi.nh3, aqi.pm2_5, aqi.pm10],
                type: 'bar',
                marker: {
                  color: '#75483e',
                  opacity: 0.6,
                }
              }
            ]}
            layout={{
              title: 'PC = Pollutant concentration (μg/m3)',
              yaxis: {title: 'PC'},
              font: {
                family: 'Epilogue, sans-serif',
                size: 15
              },
              bargap: 0.05,
              showlegend: true
            }}
          />
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Plotter
