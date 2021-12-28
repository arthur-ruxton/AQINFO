import React from 'react'

import { Wrapper } from "@googlemaps/react-wrapper" // import for map

import Plotter from './Plotter' //make req & plot data on chart.//
import Map from './Map'
import Marker from './Marker'

const render = (status) => {
  return <h1>{status}</h1>;
}; // for returning status from map //

const Aqi = () => {
  // const [ lat, setLat ] = useState('')
  // const [ long, setLong ] = useState('')
  const [clicks, setClicks] = React.useState([]);
  const [zoom, setZoom] = React.useState(3); // initial zoom
  
  //------------------------ map logic ------------------------//
  const [center, setCenter] = React.useState({
    lat: 0,
    lng: 0,
  });

  const onClick = (e) => {
    // avoid directly mutating state
    setClicks([...clicks, e.latLng]);
  };

  const onIdle = (m) => {
    console.log("onIdle");
    setZoom(m.getZoom());
    setCenter(m.getCenter().toJSON());
  };

  const form = (
    <div
      style={{
        padding: "1rem",
        flexBasis: "250px",
        height: "100%",
        overflow: "auto",
      }}
    >
      <label htmlFor="zoom">Zoom</label>
      <input
        type="number"
        id="zoom"
        name="zoom"
        value={zoom}
        onChange={(event) => setZoom(Number(event.target.value))}
      />
      <br />
      <label htmlFor="lat">Latitude</label>
      <input
        type="number"
        id="lat"
        name="lat"
        value={center.lat}
        onChange={(event) =>
          setCenter({ ...center, lat: Number(event.target.value) })
        }
      />
      <br />
      <label htmlFor="lng">Longitude</label>
      <input
        type="number"
        id="lng"
        name="lng"
        value={center.lng}
        onChange={(event) =>
          setCenter({ ...center, lng: Number(event.target.value) })
        }
      />
      <h3>{clicks.length === 0 ? "Click on map to add markers" : "Clicks"}</h3>
      {clicks.map((latLng, i) => (
        <pre key={i}>{JSON.stringify(latLng.toJSON(), null, 2)}</pre>
      ))}
      <button onClick={() => setClicks([])}>Clear</button>
    </div>
  );
  //------------------------------------------------------------------------//
  
  // const GOOGLE_MAPS_API_KEY = process.env["GOOGLE_MAPS_API_KEY"]
  // const WEATHER_API_KEY = process.env["WEATHER_API_KEY"]

  return (
    <div>
      <div className='map-div'>
        <Wrapper apiKey={process.env.REACT_APP_MAPS_KEY} render={render}>
          <Map
            center={center}
            onClick={onClick}
            onIdle={onIdle}
            zoom={zoom}
            style={{ flexGrow: "1", height: "600px" }}
          >
            {clicks.map((latLng, i) => (
              <Marker key={i} position={latLng} />
            ))}
          </Map>
        </Wrapper>
        {/* Basic form for controlling center and zoom of map. */}
        {form}
      </div>
      <Plotter />
    </div>
  )
}

export default Aqi
