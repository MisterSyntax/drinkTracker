import React from 'react'

import { DrinkFilters } from '../DrinkFilters/'
import './flyoutPanel.css'


export default class FlyoutPanel extends React.Component {

    constructor(props) {

        super(props)
        this.toggleMenu = this.toggleMenu.bind(this)

        this.state = {
            isOpen : false
        }
    }

    toggleMenu(openState) {
        this.setState({
            isOpen: openState ? false : true
        })
    }

    render() {
        return (
            <div id="flyout-container">
                <this.props.Icon onClick={()=>this.toggleMenu(this.state.isOpen)} />
                    <div id="flyout-flyout" className={this.state.isOpen ? "open":"closed"}>       
                        <div id="flyout-menu">
                            <this.props.Icon onClick={()=>this.toggleMenu(this.state.isOpen)} />
                            {this.props.children}
                        </div>
                        <div id="flyout-background" onClick={()=>this.toggleMenu(this.state.isOpen)}></div>
                    </div>
            </div>
        )
    }

}

