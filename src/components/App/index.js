import React from 'react'
import { Nav } from '../Nav/'
import { Main } from '../Main/'
import DrinkList  from '../../containers/DrinkList'
import AddDrinkForm from '../AddDrinkForm/'


/**@description: routing */
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'

/**@description: data */
import sampleData from '../../initialState.json'

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = sampleData
        this.addDrink = this.addDrink.bind(this)
    }

    addDrink(newDrink) {
        //TODO: Replace with store and Redux
        this.setState({
            allDrinks: [
                ...this.state.allDrinks,
                newDrink
            ]
        })
    }

    render() {
        return (
            <Router>
                <div id='all-content'>

                    <Nav />
                    <div id='page-content'>
                        <Switch>
                            <Route exact path='/' component={Main} />

                            <Route path='/add-drink' render={() =>
                                <AddDrinkForm onNewDrink={this.addDrink} />
                            } />

                            <Route exact path='/drink-list' render={props =>
                                <DrinkList drinks={this.state.allDrinks} filter=""/>
                            } />

                            <Route exact path='/drink-list/:filter' render={props =>
                                <DrinkList drinks={this.state.allDrinks} filter={props.match.params.filter} />
                            } />
                        </Switch>
                    </div>

                </div>
            </Router>

        )
    }

}

