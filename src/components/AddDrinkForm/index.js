import React from 'react'
import PropTypes from 'prop-types'

import AutocompleteInput from "../AutocompleteInput"
import sampleSuggestions from '../../../server/drink-names.json'
import sampleBarSuggestions from '../../../server/bar-names.json'



/**
 * Could probably make this a const but its a good example
 */

export default class AddDrinkForm extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        
    }
    
    //clears out any lingering suggestions from reloading the page
    componentWillMount(){
        this.props.onClearBars()
        this.props.onClearDrinks()
    }

    handleSubmit(evt) {
        evt.preventDefault()
        console.log("Name", this.name)
        this.props.onAddDrink({
            name: this.name.value,
            bar: this.bar.value,
            price: parseFloat(this.price.value),
            size: parseFloat(this.size.value)
        })
        this.name.value = ''
        this.bar.value = ''
        this.price.value = ''
        this.size.value = ''
    }

    render() {
        const { drinkSuggestions = [], barSuggestions = [], onAddDrink = f => f, onChangeBars = f => f, onChangeDrinks = f => f, onClearBars = f => f, onClearDrinks = f => f, fetchingBars = false, fetchingDrinks = false } = this.props

        return (
            <form id='add-drink-form' onSubmit={this.handleSubmit} >

                <div className='formField'>
                    
                    <label htmlFor='bar-name'>Bar Name:</label>

                    <AutocompleteInput                        
                        inputId="barSuggestions"
                        holder="Name of a Bar"
                        ref={(input) => { this.bar = input }}
                        suggestions={barSuggestions}
                        onChange={()=>onChangeBars(this.bar.value)}
                        onClear={onClearBars}
                        fetching={fetchingBars}
                    />
                </div>


                <div className='formField'>

                    <label htmlFor='drink'>Drink Name:</label>

                    <AutocompleteInput
                        inputId="drinkSuggestions"
                        holder="Name of a Drink"
                        ref={(input) => { this.name = input }}
                        suggestions={drinkSuggestions}
                        onChange={()=>onChangeDrinks(this.name.value)}
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
        )
    }
}
