import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from "./Menu/home";
import Company from "./Menu/company";
import Products from './Menu/products'

class Main extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return <div>
            <Switch>
                <Route path='/' component={Home}/>
                <Route path='/company' component={Company}/>
                <Route path='/products' component={Products}/>
            </Switch>

        </div>
    }
}
export default Main
