/**
 * @desc: Wrapper- wrap around UI component and feed data to AddDrink component
 * @desc: connect - Creates a component that grabs the store out of state and can map state from the store to properties in a child component
 * @desc: withRouter - Container - wrap the component and add router to its properties so if you need to nav you use this
 * @TODO: Add nav after adding drink
 */


import React from 'react'
import AddDrinkForm from '../../components/AddDrinkForm/'

import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { addDrink, suggestDrinkNames, suggestBarNames, clearBarSuggestions, clearDrinkSuggestions, setUserLocation } from '../../actionCreators'

const mapStateToProps = (state, props) => (
    {
        drinkSuggestions: state.drinkNames.suggestionsDrink,
        barSuggestions: state.barNames.suggestionsBar,
        fetchingDrinks: state.drinkNames.fetchingDrinks,
        fetchingBars: state.barNames.fetchingBars,
        autoLocate: state.autoLocate,
        location: state.userLocation
    }
)



const mapDispatchToProps = dispatch => {
    return {

        onAddDrink({name, bar, price, size, geo, address}) {
            dispatch(
                addDrink({name, bar, price, size, geo, address})
            )
        },
        onChangeBars(value) {
            if (value) {
                dispatch(
                    suggestBarNames(value)
                )
            } else {
                dispatch(
                    clearBarSuggestions()
                )
            }
        },
        onChangeDrinks(value) {
            value ?
                dispatch(suggestDrinkNames(value))
                : dispatch(clearDrinkSuggestions())
        },
        onClearBars() {
            dispatch(clearBarSuggestions())
        },
        onClearDrinks() {
            dispatch(clearDrinkSuggestions())
        },
        onSetUserLocation(userLocation) {
            dispatch(
                setUserLocation(userLocation)
            )
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(AddDrinkForm)