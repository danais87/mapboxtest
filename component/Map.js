import React, { useState } from 'react';
import MapGL, { GeolocateControl } from 'react-map-gl';


//const TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;
const TOKEN = "pk.eyJ1IjoiZGFuYWlzIiwiYSI6ImNrbHBnaWo5aDBsbTIybm53YnRrZXAxNDIifQ.9Gajte_PBZyfWl-2xl-Nhg";

const geolocateStyle = {
  float: 'left',
  margin: '50px',
  padding: '10px'
};

const Map = () => {

  const [viewport, setViewPort] = useState({
    width: "100%",
    height: 900,
    latitude: 0,
    longitude: 0,
    zoom: 2
  })

  const _onViewportChange = viewport => setViewPort({ ...viewport })

  return (
    <div style={{ margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', fontSize: '25px', fontWeight: 'bolder' }}>Click To Find Your Location or click <a href="/search">here</a> to search for a location or Go Home <a href="/">here</a></h1>
      <MapGL
        {...viewport}
        mapboxApiAccessToken={TOKEN}
        mapStyle="mapbox://styles/danais/cklpi8uc93jjp17o0fakqoodp"
        onViewportChange={_onViewportChange}
      >
        <GeolocateControl
          style={geolocateStyle}
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
      </MapGL>
    </div>
  )
}

export default Map