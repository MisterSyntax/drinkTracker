import React from 'react'
import PropTypes from 'prop-types'

import AutocompleteInput from "../AutocompleteInput"
import sampleSuggestions from '../../../server/drink-names.json'
import sampleBarSuggestions from '../../../server/bar-names.json'

import './addDrinkForm.css'



/**
 * Could probably make this a const but its a good example
 */

export default class AddDrinkForm extends React.Component {
    constructor(props) {

        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)
        this.getUserLocation = this.getUserLocation.bind(this)
        this.initGoogleAutocomplete = this.initGoogleAutocomplete.bind(this)
        this.setBarInfo = this.setBarInfo.bind(this)

        this.googleAutocomplete = undefined
        this.radius = undefined

    }

    //clears out any lingering suggestions from reloading the page
    componentWillMount() {
        this.props.onClearBars()
        this.props.onClearDrinks()

    }

    handleSubmit(evt) {
        evt.preventDefault()
        this.props.onAddDrink({
            name: this.name.value,
            bar: this.bar,
            price: parseFloat(this.price.value),
            size: parseFloat(this.size.value),
            geo: this.geo,
            address: this.address
        })
        this.name.value = ''
        this.bar = ''
        this.price.value = ''
        this.size.value = ''
    }

    getUserLocation() {
        //get a location
        if (this.props.autoLocate) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    const userLocation = { lat: position.coords.latitude, lng: position.coords.longitude }
                    this.props.onSetUserLocation(userLocation)
                    this.radius = position.coords.accuracy
                })
            }
            else {
                //TODO: Ask the user for their location
                alert('need loco')
            }
        }

    }
    setBarInfo(place) {
        this.bar = place.name
        this.address = place.formatted_address
        this.geo = {
            "lat": place.geometry.location.lat(),
            "lng": place.geometry.location.lng()
        }
    }

    initGoogleAutocomplete() {
        this.getUserLocation()
        this.googleAutocomplete = new google.maps.places.Autocomplete(
            /** @type {!HTMLInputElement} */(document.getElementById('barAutocomplete')),
            { types: ['establishment'] })

        var circle = new google.maps.Circle({
            center: this.props.location,
            radius: this.radius
        })

        this.googleAutocomplete.setBounds(circle.getBounds())

        this.googleAutocomplete.addListener('place_changed', () => {
            this.setBarInfo(this.googleAutocomplete.getPlace())

        }
        )
    }

    render() {
        const { drinkSuggestions = [], barSuggestions = [], onAddDrink = f => f, onChangeBars = f => f, onChangeDrinks = f => f, onClearBars = f => f, onClearDrinks = f => f, fetchingBars = false, fetchingDrinks = false} = this.props

        return (
            <div id='add-drink-page'>
                <form id='add-drink-form' onSubmit={this.handleSubmit} >

                    <div className='formField'>

                        <label htmlFor='bar-name'>Bar Name:</label>

                        <input id="barAutocomplete" placeholder="Find Bar Name"
                            onFocus={this.initGoogleAutocomplete} type="text"></input>

                    </div>


                    <div className='formField'>

                        <label htmlFor='drink'>Drink Name:</label>

                        <AutocompleteInput
                            inputId="drinkSuggestions"
                            holder="Name of a Drink"
                            ref={(input) => { this.name = input }}
                            suggestions={drinkSuggestions}
                            onChange={() => onChangeDrinks(this.name.value)}
                            onClear={onClearDrinks}
                            fetching={fetchingDrinks}
                        />

                    </div>


                    <div className='formField'>
                        <label htmlFor='drink-size'>Size:</label>
                        <input id='drink-size'
                            placeholder="16"
                            ref={(input) => { this.size = input }} />
                    </div>


                    <div className='formField'>
                        <label htmlFor='drink-price'>Price:</label>
                        <input id='drink-price'
                            placeholder="5"
                            ref={(input) => { this.price = input }} />
                    </div>
                    <button>Add Drink</button>
                </form>
            </div>
        )

    }

}


AddDrinkForm.propTypes = {

    onClearBars: PropTypes.func.isRequired,
    onChangeBars: PropTypes.func.isRequired,
    fetchingBars: PropTypes.bool,
    barSuggestions: PropTypes.array,

    onClearDrinks: PropTypes.func.isRequired,
    onChangeDrinks: PropTypes.func.isRequired,
    onAddDrink: PropTypes.func.isRequired,
    drinkSuggestions: PropTypes.array,
    fetchingDrinks: PropTypes.bool,

    onSetUserLocation: PropTypes.func.isRequired

}