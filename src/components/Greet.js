import React, { Component } from 'react'

class Greet extends Component{
    render(){
        const {name, heroName} = this.props
        return (
            <div>
            <h1>
                Hello {this.props.name} aka {this.props.heroName}
            </h1>
            </div>
        )
    }
    }
   
export default Greet