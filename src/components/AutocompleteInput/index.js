//TODO: Replace with store data

import PropTypes from 'prop-types'
import React from 'react'

export default class AutocompleteInput extends React.Component {
    constructor(props) {
        super(props)

    }
    get value() {
        console.log(this)
        return this.inputText.value
    }

    set value(inputValue) {
        this.inputText.value = inputValue
    }

    render() {
        const {inputId, holder="test", suggestions = [], onChange = f => f, onClear = f => f, fetching = false} = this.props
        return (
            <div className="autocomplete">

                <input ref={(input) => { this.inputText = input }}
                    placeholder={holder}
                    type="text"
                    onChange={onChange}
                    onFocus={onChange}
                    onBlur={() => setTimeout(onClear, 250)}
                    list={inputId}
                />

                <span>{(fetching) ? "Downloading" : null}</span>

                <div id={inputId} className="suggestions">
                    {suggestions.map(
                        (item, i) => {
                            return (
                                <p key={i} onClick={() => {
                                    this.inputText.value = item
                                    onClear()
                                }}>{item}</p>
                            )
                        }
                    )}
                </div>

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