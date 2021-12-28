import React, { useState } from 'react'

import { Wrapper } from "@googlemaps/react-wrapper" // import for map

import Plotter from './Plotter' //make req & plot data on chart.//
import Map from './Map'
import Marker from './Marker'

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
            style={{ width: "400px", height: "400px" }}
          >
            <Marker position={click} />
          </Map>
        </Wrapper>
      </div>
      <Plotter location={location}/>
    </div>
  )
}

export default Aqi
