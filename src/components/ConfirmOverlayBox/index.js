import React from 'react'
import PropTypes from 'prop-types'
import './confirmOverlay.css'

export default class ConfirmOverlayBox extends React.Component {
    constructor(props) {
        super(props)

        this.toggleOverlay = this.toggleOverlay.bind(this) 
        this.confirmEventAndClose = this.confirmEventAndClose.bind(this)

        this.state = {
            isOpen: false
        }
    }
    toggleOverlay(evt) {
        this.setState({ isOpen: !this.state.isOpen })
    }
    confirmEventAndClose(){
        this.props.confirmFunction(this.props.drinkId)
        this.setState({ isOpen: !this.state.isOpen })
    }
    render() {
        return (
            <div className="overlay-box">
                <div className="open-overlay-button" onClick={this.toggleOverlay}>{this.props.content}</div>
                <div className="overlay-box-container"
                    style={this.state.isOpen ? { display: "block" } : { display: "none" }}>
                    <div className="overlay-lightbox">
                        <p>{this.props.boxQuestion}</p>
                        <div className="button-holder">
                            <button className="secondary-button" onClick={this.confirmEventAndClose}> Confirm </button>
                            <button className="secondary-button" onClick={this.toggleOverlay}> Cancel </button>
                        </div>
                    </div>
                    <div className="overlay-background" onClick={this.toggleOverlay}></div>
                </div>
            </div>
        )
    }

}

ConfirmOverlayBox.propTypes = {
    content: PropTypes.string.isRequired,
    boxQuestion: PropTypes.string.isRequired,
    confirmFunction: PropTypes.func.isRequired
}
