import React, { Component } from 'react'

export default class MountingChildern extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'mark'
        }
        console.log("MountingChildern constructor")
    };

    static getDerivedStateFromProps (state, props){
        console.log("MountingChildern getDerivedStateProps")
        return null

    };

    componentDidMount() {
        console.log("MountingChildern componentDidMount")
        return null
    };

    shouldComponentUpdate() {
        console.log("Mounting B shouldComponentUpdate")
        return true
    };
    
    componentDidUpdate() {
        console.log("MountingChildren ComponentDidUpadte")
    };

    
    render() {
        console.log("Mounting children")
        return (
            <div>
                Mounting Children
            </div>
        )
    };
};
