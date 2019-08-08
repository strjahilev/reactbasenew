import React from 'react';
import {NavLink} from "react-router-dom";

class Products extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div>
            <ul>
                <li><NavLink>1</NavLink></li>
                <li><NavLink>2</NavLink></li>
                <li><NavLink>3</NavLink></li>
            </ul>
        </div>
    }

}
