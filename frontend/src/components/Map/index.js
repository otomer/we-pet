import './map.scss';

import {
  GoogleMap,
  InfoWindow,
  Marker,
  withGoogleMap,
  withScriptjs,
} from 'react-google-maps';
import { compose, withProps } from 'recompose';

import { GOOGLE_MAPS_API_KEY } from '../../constants';
import PropTypes from 'prop-types';
import React from 'react';

const GoogleMapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '100%' }} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap,
)(props => (
  <GoogleMap
    defaultZoom={6}
    defaultCenter={{ lat: -35.390105, lng: 138.463256 }}
    center={
      props.markers &&
      props.markers[0] && {
        lat: parseFloat(props.markers[0].latitude),
        lng: parseFloat(props.markers[0].longitude),
      }
    }
  >
    {/* Info Window */}
    {props.isInfoboxVisible && (
      <InfoWindow
        position={{ lat: props.infoboxPosY, lng: props.infoboxPosX }}
        onCloseClick={() => props.handleInfoboxClick()}
      >
        <div>
          <h4>{props.infoboxTitle}</h4>
          <p>{props.infoboxAddress}</p>
        </div>
      </InfoWindow>
    )}

    {/* Markers */}
    {props.markers &&
      props.markers.map(location => {
        const markerLat = parseFloat(location.latitude);
        const markerLng = parseFloat(location.longitude);
        return (
          <Marker
            key={location.id}
            /* eslint-disable no-multi-str */
            icon={{
              url: `data:image/svg+xml;utf-8, \
              <svg xmlns="http://www.w3.org/2000/svg" width="45" viewBox="0 0 512 512"><path fill="%23e74c3c" d="M252.55 0h5.95c33.76.52 67.31 11.19 94.97 30.59 27.22 18.94 48.77 45.95 61.03 76.77 13.14 32.69 15.69 69.52 7.17 103.71-4.69 19.44-13.24 37.77-24.07 54.54-43.51 75.53-86.86 151.15-130.3 226.72-3.45 6.37-7.56 12.4-10.59 18.97l-.03.7h-1.21c-1.09-3.48-3.25-6.44-4.99-9.6-45.11-78.52-90.2-157.06-135.34-235.57-11.21-17.1-19.98-35.9-24.82-55.81-8.5-34.15-5.96-70.94 7.16-103.6 12.26-30.85 33.82-57.89 61.07-76.84C185.94 11.35 219.12.74 252.55 0m-6.26 64.44c-35.07 2.83-67.55 24.7-84.18 55.59-12.65 23.12-15.96 51.04-9.61 76.57 5.91 23.77 20.39 45.27 40.13 59.76 15.73 11.8 34.8 19.03 54.4 20.59 25.3 2.2 51.34-4.95 71.73-20.15 21.42-15.44 36.67-39.16 41.84-65.06 3.31-17.12 2.61-35.08-2.44-51.8-7.43-24.97-24.51-46.85-46.76-60.35-19.27-12.01-42.54-17.21-65.11-15.15z" /><path fill="%23c0392b" d="M246.29 64.44c22.57-2.06 45.84 3.14 65.11 15.15 22.25 13.5 39.33 35.38 46.76 60.35 5.05 16.72 5.75 34.68 2.44 51.8-5.17 25.9-20.42 49.62-41.84 65.06-20.39 15.2-46.43 22.35-71.73 20.15-19.6-1.56-38.67-8.79-54.4-20.59-19.74-14.49-34.22-35.99-40.13-59.76-6.35-25.53-3.04-53.45 9.61-76.57 16.63-30.89 49.11-52.76 84.18-55.59m1.83 42.76c-15.04 1.8-29.3 9.21-39.45 20.45-10.03 10.95-16.02 25.5-16.56 40.34-.67 14.62 3.9 29.41 12.74 41.08 9.61 12.84 24.18 21.87 39.99 24.58 13.71 2.43 28.21.28 40.55-6.18 13.67-7.04 24.63-19.16 30.18-33.5 5.65-14.32 5.84-30.7.55-45.15-4.99-13.88-15-25.86-27.72-33.3-12.03-7.13-26.42-10.05-40.28-8.32z" /></svg>`, // This may not work in <=IE11
            }}
            /* eslint-disable no-multi-str */
            position={{ lat: markerLat, lng: markerLng }}
            label={location.name}
            title={location.address}
            onClick={(message, lang, lat) => {
              props.handleMarkerClick(
                location.name,
                location.address,
                markerLat,
                markerLng,
              );
            }}
          />
        );
      })}
  </GoogleMap>
));

class Map extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      infoboxTitle: '',
      infoboxAddress: '',
      isInfoboxVisible: false,
      markerLang: 0,
      markerLat: 0,
    };
  }

  handleMarkerClick = (message, address, lang, lat) => {
    this.setState({
      infoboxTitle: message, // Message shown in info window
      infoboxAddress: address, // Address shown in info window
      isInfoboxVisible: !this.state.isInfoboxVisible, // Show info window
      markerLang: lang + 0.006, // Y coordinate for positioning info window
      markerLat: lat + 0.0004, // X coordinate for positioning info window
    });
  };

  handleInfoboxClick = () => {
    this.setState({
      isInfoboxVisible: false,
    });
  };

  render() {
    const { markers } = this.props;
    return (
      <div className="map-container">
        <GoogleMapComponent
          markers={markers}
          isInfoboxVisible={this.state.isInfoboxVisible} // Show/hide info window
          infoboxTitle={this.state.infoboxTitle} // Message shown in info window
          infoboxAddress={this.state.infoboxAddress} // Message address shown in info window
          handleInfoboxClick={this.handleInfoboxClick} // Handle closing of the info window
          handleMarkerClick={this.handleMarkerClick} // Handle click on Marker component
          infoboxPosY={this.state.markerLang} // Y coordinate for positioning info window
          infoboxPosX={this.state.markerLat} // X coordinate for positioning info window
        />
      </div>
    );
  }
}

Map.propTypes = {
  markers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      latitude: PropTypes.string,
      longitude: PropTypes.string,
      name: PropTypes.string,
      address: PropTypes.string,
    }),
  ),
};

export default Map;
