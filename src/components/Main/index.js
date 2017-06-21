import React from 'react'
import {
    Link
} from 'react-router-dom'

const Main = () =>{
        return (
            <div id="Main">
                <p></p>
                <button><Link to="/drink-list">Find Drinks Near Me</Link></button>
            </div>
        )
}

export default Main