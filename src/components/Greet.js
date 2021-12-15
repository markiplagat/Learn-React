import React, { Component } from 'react'

class Greet extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "Mark",
            heroName: "Coder"
        }
    };
    render(){
        return (
            <div>
            <h1>
                Hello {this.state.name} aka {this.state.heroName}
            </h1>
            </div>
        )
    };
};
   
export default Greet;
