import React from 'react'
import PropTypes from 'prop-types'

export default class BarMap extends React.Component {
    constructor(props) {
        super(props)
        this.getNearbyBarNames = this.getNearbyBarNames.bind(this)
        this.getUserLocation = this.getUserLocation.bind(this)
        this.clickGetBars = this.clickGetBars.bind(this)
    }

    /**
     * @description: When component mounts get the users geo-location, so we can get the list of nearby bars
     */
    componentDidMount() {


    }

    clickGetBars(evt) {
        evt.preventDefault()
        //if we don't have the user location, get it
        this.getUserLocation()
        this.getNearbyBarNames()
    }

    getUserLocation() {
        //get a location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                console.log(position.coords.latitude)
                const userLocation = { lat: position.coords.latitude, lng: position.coords.longitude }
                this.props.onSetUserLocation(userLocation)
            })
        }
        else {
            console.log('no nav geo')
            //TODO: Ask the user for their location
            this.props.userLocation.lat = 0
            this.props.userLocation.lng = 0
        }
    }
    getNearbyBarNames() {

        //get nearby bars
        const searchLocation = new google.maps.LatLng(this.props.userLocation.lat, this.props.userLocation.lng);
        window.sL = searchLocation

        const map = new google.maps.Map(document.getElementById('BarMap'), {
            center: searchLocation,
            zoom: 15
        })

        //can add in openNow with openNow
        const locationsRequest = {
            location: searchLocation,
            radius: '2500',
            type: 'bar'
        }

        //update the state to have the local bar
        const callback = (results, status) => {
            console.log('callback')
            results ? console.log(results, status) : console.log('NOOOOOOOOOOOOOOOOOOOO RESULTS')
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                for (var i = 0; i < results.length; i++) {
                    console.log(results[i]);
                }
            }
        }
        const service = new google.maps.places.PlacesService(map)

        service.nearbySearch(locationsRequest, callback)
    }

    render() {
        return (<div id="BarMapContainer">
            <p>{this.props.userLocation.lat} {this.props.userLocation.lng}</p>
            <button onClick={this.clickGetBars}> Get Bar Names </button>
            <div id="BarMap" style={{ display: "none" }}></div>
        </div>)
    }
}

BarMap.defaultProps = {

    userLocation: {
        lat: -10,
        lang: -10
    }

};

BarMap.propTypes = {
    userLocation: PropTypes.object
};
