/**
 * @desc: Wrapper- wrap around UI component and feed data to DRinkListCount component
 * @desc: connect - Creates a component that grabs the store out of state and can map state from the store to properties in a child component
 */

import React from 'react'
import { DrinkList } from '../../components/DrinkList/'
import { connect } from 'react-redux'

const mapStateToProps = (state, props) => {
    
    return {
        drinks: state.allDrinks,
        filter: props.filter 
    }

}

const Container = connect(mapStateToProps)(DrinkList)

export default Container