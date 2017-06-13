import React from "react"

/**
 * Could probably make this a const but its a good example
 */

export default class AddDrinkForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit() {
        alert('submit');
    }
    handleChange() {
        alert("on Change");
    }
    render() {
        return (
            <form id="add-drink-form" onSubmit={this.handleSubmit} >
                <div className="formField">
                    <label>
                        Drink Name:
                        <input id="drink-name" placeholder="Drink Name" value={this.state.value} onChange={this.handleChange}/>
                    </label>
                </div>
                <div className="formField">
                    <label> Bar Name:
                        <input id="bar-name" placeholder="Bar Name" />
                    </label>
                </div>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}