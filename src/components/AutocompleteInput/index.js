//TODO: Replace with store data

import PropTypes from 'prop-types'
import React from 'react'

export default class AutocompleteInput extends React.Component {
    constructor(props) {
        super(props)

    }
    get value() {
        return this.inputText.value
    }

    set value(inputValue) {
        this.inputText.value = inputValue
    }

    render() {
        return (
            <div>
                <input ref={(input) => { this.inputText = input }}
                    type="text"
                    list={this.props.inputId}
                />
                <datalist id={this.props.inputId}>
                    {this.props.options.map(
                        (opt, i) => {
                            return (
                                <option key={i}>{opt}</option>
                            )
                        }
                    )}
                </datalist>
            </div>
        )

    }
}

AutocompleteInput.PropTypes = {
    suggestions: PropTypes.array,
    inputId: PropTypes.string.isRequired
}

AutocompleteInput.defaultProps = {
    suggestions: []
}