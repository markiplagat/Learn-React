import React, { Component } from 'react'

class FormHandling extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comments: '',
             topic: 'react',
        }
    }

    handleUsernameChange = event => {
        this.setState({
            username: event.target.value
        })
    }

    handleOptionChange = event => {
        this.setState({
            topic: event.target.value
        })
    }

    handleCommentsChange = event => {
        this.setState({
            comments: event.target.value
        })
    }
    handleSubmit = event => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }
    
    render() {
        const { username, comments, topic} = this.state
        return (
            <form onSubmit={this.handleSubmit} style = {{padding: '18px'}}>
               <div>
                   <label>
                       Username
                   </label>
                   <input type="text" value={username} onChange={this.handleUsernameChange}></input>
               </div> 
               <div>
                   <label>Comments</label>
                   <textarea value={comments} onChange={this.handleCommentsChange} />
               </div>
               <div>
                   <label>Topic</label>
                   <select value={topic} onChange={this.handleOptionChange}>
                       <option key="1" value="react">React</option>
                       <option key="2" value="vue">Vue</option>
                       <option key="3" value="angular">Angular</option>
                   </select>
               </div>
               <button>Submit</button>
            </form>

        )
    }
}
export default FormHandling
