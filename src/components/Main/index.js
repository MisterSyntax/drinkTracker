import React from 'react'
import {
    Link
} from 'react-router-dom'
import Beer from 'react-icons/lib/ti/beer'
import './main.css'

const Main = () =>{
        return (
            <div id="Main">
                    <Link className="pov-text" to="/drink-list">
                        <Beer id="pov-image"/>
                    </Link>
                    <div> <Link className="pov-text" to="/drink-list">Find Drinks Near Me</Link> </div>
                   
            </div>
        )
}

export default Main