import React from 'react'
import PropTypes from 'prop-types'

import './map.css'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

/**
 * @description: This component generates a map with markers at the passed in parameters
 * @param {object} geo - the location to mark on the map
 */

const Map = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={3}
    defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
  >

  </GoogleMap>
));

export default Map
