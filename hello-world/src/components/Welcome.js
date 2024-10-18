import React from "react";

//Class import
import { Component } from "react";
 
class Welcome extends Component {
    render(){
        return (
        <div>
            <h1>Welcome {this.props.name} aka {this.props.heroname}</h1>
            {this.props.children}
        </div>
        );
    }
}

export default Welcome