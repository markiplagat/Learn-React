import React, { Component } from 'react'

class RefDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        this.cbRef = null
        this.setCbRef = element => {
            this.cbRef = element
        }
    
        this.state = {
             
        }
    }

    componentDidMount() {
        if (this.cbRef) {
            this.cbRef.focus()
        }
        // this.inputRef.current.focus()
        // console.log(this.inputRef)
    }

    handleClick = () => {
        alert(this.inputRef.current.value)
    }
    
    render() {
        return (
            <div>
                <input type="text" ref={this.setcbRef}></input>
                {/* <input type="text" ref={this.inputRef}></input> */}
                <button onClick={this.handleClick}>Ref</button>
            </div>
        )
    }
}

export default RefDemo
