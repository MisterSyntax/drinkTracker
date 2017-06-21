/**
 * @desc: Wrapper- wrap around UI component and feed data to BarMap component
 * @desc: connect - Creates a component that grabs the store out of state and can map state from the store to properties in a child component
 */

import React from 'react'
import BarMap from '../../components/BarMap/'
import { connect } from 'react-redux'
import { setUserLocation } from '../../actionCreators'

const mapStateToProps = (state, props) =>
    ({
        userLocation: state.userLocation
    })

const mapDispatchToProps = dispatch => {
    return {
        onSetUserLocation(userLocation) {
            console.log(userLocation)
            dispatch(
                setUserLocation(userLocation)
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BarMap)
