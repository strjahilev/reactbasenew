import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Products from "./products";
import Product from "./product";

class ProductsRouter extends React.Component{
    render(){
        return <div>

            <Switch>
                <Route exact path="/products" component={Products} />
                <Route path="/products/:id" component={Product} />
            </Switch>
        </div>
    }
}
export default ProductsRouter
