import React, { Component } from 'react'
import './Forms3.css'
import Sidebar from './Sidebar'

class Forms extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comment: '',
            Topic: 'Node'
        }
    }
    UserHnadler = event => { 
        this.setState({
            username: event.target.value
        })
    }

    UserComment = event => {
        this.setState({
            comment: event.target.value
        })
    }
    UserTopic = (event) => {
        this.setState({
            Topic: event.target.value
        })
    }

    HandleSubmit = event => {
        alert(`${this.state.username} ${this.state.comment} ${this.state.Topic}`)
        event.preventDefault()
    }

    render() {
        return (
            <div className="myDiv">
            <center>
                                <form onSubmit={this.HandleSubmit}>
                    <div>
                        <label>Username</label>
                        <input type="text" value={this.state.username} onChange={this.UserHnadler} />

                    </div>
                    {/* <div>
                        <label>Password</label>
                        <input type="password" value ={this.state.password} onChange = {this.UserPasword}></input>
                    </div> */}
                    <div>
                        <label>Comment</label>
                        <textarea value={this.state.comment} onChange={this.UserComment} />
                    </div>
                    <div>
                        <label>Topic</label>
                        <select value={this.state.Topic} onChange={this.UserTopic}>
                            <option value="Angular">Angular</option>
                            <option value="Node">Node</option>
                            <option value="React">React</option>
                        </select>
                    </div>
                    <button type="submit">submit</button>
                </form>
            </center>
            </div>
        )
    }
}

export default Forms
