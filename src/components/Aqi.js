import React, { useState } from 'react'

import { Wrapper } from "@googlemaps/react-wrapper" // import for map

import Warning from './Warning'
import Plotter from './Plotter' //make req & plot data on chart.//
import Map from './Map'
import Marker from './Marker'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const render = (status) => {
  return <h1>{status}</h1>;
}; // for returning status from map //

const Aqi = () => {
  //------------------------ map logic ------------------------//
  const [click, setClick] = useState('');
  const [zoom, setZoom] = useState(3) // initial zoom

  const [location, setLocation] = useState({
    lat: 0,
    lng: 0,
  });

  const [center, setCenter] = useState({
    lat: 0,
    lng: 0,
  });

  const onClick = (e) => {
    // avoid directly mutating state
    setClick(e.latLng)
    setLocation(e.latLng.toJSON())
  };

  const onIdle = (m) => {
    console.log("onIdle");
    setZoom(m.getZoom());
    setCenter(m.getCenter().toJSON())
  };
  //------------------------------------------------------------------------//

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
   const mapKey = process.env.REACT_APP_MAPS_KEY

  return (
    <div className="mapp-to-aqi-div">
      <div className='map-div'>
        <Wrapper apiKey={mapKey} render={render}>
          <Map
            center={center}
            onClick={onClick}
            onIdle={onIdle}
            zoom={zoom}
            style={{ height: "650px" }}
          >
            <Marker position={click} />
          </Map>
        </Wrapper>
      </div>
      <div className="plot-div">
        <Button onClick={handleShow}>
          Air Quality Index
        </Button>
        <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
           <Modal.Title>Local air quality - Pollutant concentration in μg/m3</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Plotter location={location}/>
          </Modal.Body>
        </Modal>
      </div>
      <Warning location={location}/>
    </div>
  )
}

export default Aqi
