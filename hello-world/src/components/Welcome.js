import React from "react";

//Class import
import { Component } from "react";
 
class Welcome extends Component {
    render(){
        const {name, heroname, children} = this.props
        return (
        <div>
            <h1>Welcome {name} aka {heroname}</h1>
            {children}
        </div>
        );
    }
}

export default Welcome