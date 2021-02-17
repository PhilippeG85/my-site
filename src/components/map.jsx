import React from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

function MapContainer({ google }) {
  const mapStyles = {
    width: '100%',
    height: '100%'
  };
  return (
    <Map
      google={google}
      zoom={5}
      style={mapStyles}
      initialCenter={
        {
          lat: 45.528714,
          lng: -73.573740
        }
      }
    >
      <Marker position={{ lat: 45.528714, lng: -73.573740 }} />
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAPS_API_KEY
})(MapContainer);
