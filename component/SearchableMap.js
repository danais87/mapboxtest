import "mapbox-gl/dist/mapbox-gl.css"
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css"
import React, { Component } from 'react'
import MapGL from "react-map-gl";
import DeckGL, { GeoJsonLayer } from "deck.gl";
import Geocoder from "react-map-gl-geocoder";

//const TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;
const token = "pk.eyJ1IjoiZGFuYWlzIiwiYSI6ImNrbHBnaWo5aDBsbTIybm53YnRrZXAxNDIifQ.9Gajte_PBZyfWl-2xl-Nhg";

class SearchableMap extends Component {
  state = {
    viewport: {
      latitude: 0,
      longitude: 0,
      zoom: 1
    },
    searchResultLayer: null
  }

  mapRef = React.createRef()

  handleViewportChange = viewport => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    })
  }
  handleGeocoderViewportChange = viewport => {
    const geocoderDefaultOverrides = { transitionDuration: 1000 };

    return this.handleViewportChange({
      ...viewport,
      ...geocoderDefaultOverrides
    });
  };

  handleOnResult = event => {
    this.setState({
      searchResultLayer: new GeoJsonLayer({
        id: "search-result",
        data: event.result.geometry,
        getFillColor: [255, 0, 0, 128],
        getRadius: 1000,
        pointRadiusMinPixels: 10,
        pointRadiusMaxPixels: 10
      })
    })
  }

  render() {
    const { viewport, searchResultLayer } = this.state
    return (
      <div style={{ height: '100vh' }}>
        <h1 style={{ textAlign: 'center', fontSize: '25px', fontWeight: 'bolder' }}>Use the search bar to find a location or go back to your location <a href="/map">here</a></h1>
        <MapGL
          ref={this.mapRef}
          {...viewport}
          mapStyle="mapbox://styles/danais/cklpi8uc93jjp17o0fakqoodp"
          width="100%"
          height="100%"
          onViewportChange={this.handleViewportChange}
          mapboxApiAccessToken={token}
        >
          <Geocoder
            mapRef={this.mapRef}
            onResult={this.handleOnResult}
            onViewportChange={this.handleGeocoderViewportChange}
            mapboxApiAccessToken={token}
            position='top-left'
          />
        </MapGL>
        <DeckGL {...viewport} layers={[searchResultLayer]} />
      </div>
    )
  }
}

export default SearchableMap;