import React from 'react'
import TopNav from '../TopNav/'
import Main from '../Main/'
import DrinkList  from '../../containers/DrinkList/'
import AddDrinkForm from '../../containers/AddDrinkForm/'
import "./app.css" 


/**@description: routing */
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'


export default class App extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Router>
                <div id='all-content'>
                    <TopNav />
                    <div id='page-content' className="centered-content">
                        <Switch>
                            <Route exact path='/' component={Main} />

                            <Route path='/add-drink' component={AddDrinkForm}/>

                            <Route exact path='/drink-list' component={DrinkList} />

                            <Route exact path='/drink-list/size=:filter' render={props =>
                                <DrinkList filter={props.match.params.filter} />
                            } />
                        </Switch>
                    </div>

                </div>
            </Router>

        )
    }

}

