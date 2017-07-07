import {
    Link
} from 'react-router-dom'
import React from 'react'
import MenuIcon from 'react-icons/lib/md/menu'
import FlyoutPanel from '../FlyoutPanel/'

export default class Nav extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (

            <div id="Nav">
                <FlyoutPanel flyoutButton={MenuIcon}>
                    <div><Link className="action-item" to="/">Home</Link></div>
                    <div><Link className="action-item" to="/add-drink">Add Drink</Link></div>
                    <div><Link className="action-item" to="/drink-list">Drink List</Link></div>
                </FlyoutPanel>

            </div>
        )
    }

}