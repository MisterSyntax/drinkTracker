import React from 'react'
import PropTypes from 'prop-types'
import './infoOverlay.css'

/**
 * @desc: This creates an info overlay
 * @param: {object} title - the content to be displayed and clicked to open the overlay
 */

export default class InfoOverlay extends React.Component {

    constructor(props) {
        super(props)

        this.toggleOverlay = this.toggleOverlay.bind(this) 

        this.state = {
            isOpen: false
        }
    }

    toggleOverlay(evt) {
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        return (
            <div className="overlay-info-box">

                <div className="open-info-overlay-button" onClick={this.toggleOverlay}>{this.props.title}</div>

                <div className="overlay-info-box-container"
                    style={this.state.isOpen ? { display: "block" } : { display: "none" }}>

                    <div className="overlay-info-lightbox">
                        {this.props.children}
                    </div>

                    <div className="overlay-info-background" onClick={this.toggleOverlay}></div>

                </div>

            </div>
        )
    }

}

InfoOverlay.propTypes = {
    title: PropTypes.object
}
