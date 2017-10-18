import _ from "lodash";
import React from "react";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCOf9SR36Oz4MaKIBqhN5S4TBxcbRr75TE&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `150px`, width:`300px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={16} defaultCenter={{ lat: 40.705253, lng: -74.01407
 }}>
    <Marker position={{ lat: 40.705253, lng: -74.01407
 }} />
  </GoogleMap>
));

const enhance = _.identity;

const ReactGoogleMaps = () => [

  <MyMapComponent key="map" />
];

export default enhance(ReactGoogleMaps);
