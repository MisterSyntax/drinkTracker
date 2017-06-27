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
                <FlyoutPanel Icon={MenuIcon}>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/add-drink">Add Drink</Link></li>
                        <li><Link to="/drink-list">Drink List</Link></li>
                    </ul>
                </FlyoutPanel>

            </div>
        )
    }

}