import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username: '',
            comments:'',
            topic:'react'
             
        }
    }
    handleUsernameChange = event => {
        this.setState ({
            username: event.target.value
        })
    }
    handlecommentsChange = event =>{
        this.setState ({
            comments : event.target.value
        })
    }
    handletopicChange = event =>{
        this.setState({
            topic: event.target.value
        })
    }
    handleSubmit = event => {
        alert(`${this.state.username} write ${this.state.comments} on ${this.state.topic}`)
    }

    render() {
        return (
           <form onSubmit ={this.handleSubmit}>
               <div>
                   <label>UserName</label>
                   <input typer = 'text' value = {this.state.username} onChange ={this.handleUsernameChange}/>
               </div>
               <div>
                   <label>Comments</label>
                   <textarea type = 'text' value = {this.state.comments} onChange={this.handlecommentsChange}/>
                </div>   
                <div>
                    <label>Topic</label>
                    <select value = {this.state.topic} onChange = {this.handletopicChange}>
                        <option value = "react">React </option>
                        <option value = "angular">Angular </option>
                        <option value = "vue">Vue </option>
                        <option value = "node">Node </option>
                    </select>
                </div>
                <button type='submit'>Submit</button>
           </form>
        )  
    }
}

export default Form
