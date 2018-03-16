import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MyMapComponent = withScriptjs(withGoogleMap((props) => {
  const markers = props.markers.sortedSpaces.map((spot) => (<Marker key={spot.id} position={{ lat: parseFloat(spot.lat), lng: parseFloat(spot.lng) }} />))
  return(
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 40.705253, lng: -74.01407 }}
    >
      { markers }
    </GoogleMap>
  )}
))

export default MyMapComponent;
