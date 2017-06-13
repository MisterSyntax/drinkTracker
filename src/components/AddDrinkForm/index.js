import React from 'react'
import PropTypes from 'prop-types'

/**
 * Could probably make this a const but its a good example
 */

export default class AddDrinkForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(evt) {
        evt.preventDefault()
        this.props.onNewDrink({
            name: this.name.value,
            bar: this.bar.value,
            price: parseFloat(this.price.value),
            size: parseFloat(this.size.value)
        })
        this.name = ''
        this.bar = ''
        this.price = ''
        this.size = ''
    }

    handleChange() {
        alert('on Change')
    }

    render() {
        const {drink, 
            barName, 
            size, 
            price,
            onNewDrink} = this.props
            console.log(onNewDrink);
            
        return (
            <form id='add-drink-form' onSubmit={this.handleSubmit} >
                <div className='formField'>
                    <label htmlFor='drink'>Drink Name:</label>
                    <input id='drink' 
                            defaultValue={drink} 
                            ref={(input)=>{this.name = input}}/>
                </div>

                <div className='formField'>
                    <label htmlFor='bar-name'>Bar Name:</label>
                    <input id='bar-name' 
                            defaultValue={barName} 
                            ref={(input)=>{this.bar = input}}/>
                </div>

                <div className='formField'>
                    <label htmlFor='drink-size'>Size:</label>
                    <input id='drink-size' 
                            defaultValue={size} 
                            ref={(input)=>{this.size= input}}/>
                </div>

                <div className='formField'>
                    <label htmlFor='drink-price'>Price:</label>
                    <input id='drink-price' 
                            defaultValue={price} 
                            ref={(input)=>{this.price = input}}/>
                </div>
                <button>Add Drink</button>
            </form>
        )
    }
}


AddDrinkForm.defaultProps = {
    drink: 'Drink Name',
    barName: 'Bar Name',
    size: 16,
    price: 5
}

AddDrinkForm.PropTypes = {
    drink: PropTypes.string,
    barName: PropTypes.string,
    size: PropTypes.number,
    price: PropTypes.number
}