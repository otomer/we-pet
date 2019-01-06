import React from 'react';
import PropTypes from 'prop-types';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';
import './map.scss';

// TODO: This is a temporary implementation.
const MyMapComponent = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyAbWsYd03RL-T_1VZW5wU7Zod2u9H3QIXM',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '100%' }} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap,
)(props => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    {props.items.map((location, index) => {
      return (
        <Marker
          key={location.id}
          position={{
            lat: parseFloat(location.latitude),
            lng: parseFloat(location.longitude),
          }}
          title="Click to zoom"
          // onClick={props.onMarkerClick}
        />
      );
    })}

    {props.isMarkerShown && (
      <Marker position={{ lat: -34.397, lng: 150.644 }} />
    )}
  </GoogleMap>
));

const Map = props => {
  return (
    <div className="map-container">
      <MyMapComponent isMarkerShown items={props.items} />
    </div>
  );
};

Map.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Map;
