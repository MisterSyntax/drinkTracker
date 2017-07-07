import React from 'react'
import PropTypes from 'prop-types'

import { DrinkFilters } from '../DrinkFilters/'
import './flyoutPanel.css'


export default class FlyoutPanel extends React.Component {

    constructor(props) {

        super(props)
        this.toggleMenu = this.toggleMenu.bind(this)
        this.menuItemClick = this.menuItemClick.bind(this)

        this.state = {
            isOpen : false
        }
    }

    toggleMenu(openState) {
        this.setState({
            isOpen: openState ? false : true
        })
    }
    menuItemClick(evt){
        if(evt.target.nodeName === 'A' || evt.target.className === 'action-item') {
            this.toggleMenu(this.state.isOpen)
        }
    }

    render() {
        return (
            <div id="flyout-container">
                {typeof(this.props.flyoutButton) === 'string'? <div className="action-item" onClick={()=>this.toggleMenu(this.state.isOpen)}> {this.props.flyoutButton}</div> : <this.props.flyoutButton className="action-item" onClick={()=>this.toggleMenu(this.state.isOpen)} />}
                
                    <div id="flyout-flyout" className={this.state.isOpen ? "open":"closed"}>       
                        <div id="flyout-menu">

                            {typeof(this.props.flyoutButton) === 'string'? <div className="action-item" onClick={()=>this.toggleMenu(this.state.isOpen)}> {this.props.flyoutButton}</div> : <this.props.flyoutButton className="action-item" onClick={()=>this.toggleMenu(this.state.isOpen)} />}
                            <div onClick={(evt)=>this.menuItemClick(evt)}>
                            {this.props.children}
                            </div>

                        </div>
                        <div id="flyout-background" onClick={()=>this.toggleMenu(this.state.isOpen)}></div>
                    </div>
            </div>
        )
    }

}

FlyoutPanel.propTypes = {
    flyoutButton :  PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string
    ])
}