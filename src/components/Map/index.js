import React from 'react'
import PropTypes from 'prop-types'

import './map.css'

/**
 * @description: This component generates a map with markers at the passed in parameters
 * @param {object} geo - the location to mark on the map
 */
export default class Map extends React.Component {
    constructor(props) {
        
        super(props)
        this.mapId = "drink-map" + this.props.geo.lat.toString() + this.props.geo.lng.toString();
    }

    componentDidMount() {

        const uluru = this.props.geo
        const map = new google.maps.Map(document.getElementById(this.mapId), {
            zoom: 15,
            center: uluru
        })
        const marker = new google.maps.Marker({
            position: uluru,
            map: map
        })
        google.maps.event.addListenerOnce(map, 'hover', function() {
            google.maps.event.trigger(map, 'resize');
        });
    }

    render() {
        return (
            <div id={this.mapId}  style={{width: 200, height: 200}}>

            </div>
        )
    }
}

Map.propTypes = {
    geo: PropTypes.object.isRequired
}