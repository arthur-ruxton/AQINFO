import React, { useState } from 'react'

import { Wrapper } from "@googlemaps/react-wrapper" // import for map

import Map from './Map'
import Marker from './Marker'
import Warning from './Warning'
import Plotter from './Plotter' //make req & plot data on chart.//

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
            style={{ height: "650px" }}
          >
            <Marker position={click} />
          </Map>
        </Wrapper>
      </div>
      { click ?
      <div className="options-div">
        <Plotter location={location}/>
        <Warning location={location}/>
      </div> :
      <></>
    }
    </div>
  )
}

export default Aqi
