import React from 'react';

class Product extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        const prodId = this.props.match.params.id;
        return <div>
            <h1>Products of company:</h1>
            <h2>Product № {prodId}</h2>
        </div>
    }
}
export default Product
