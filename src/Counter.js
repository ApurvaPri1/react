import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    Increment() {
        this.setState({
            count: this.state.count+1
        })
    }
    Decrement() {
        this.setState({
            count: this.state.count-1
        })
    }
    Four() {
        this.setState({
            count:this.state.count+4
        })
    }
    Six() {
        this.setState({
            count:this.state.count+6
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.count}</div>
                <button onClick ={()=> this.Increment()}>Increment</button>
                <button onClick = {()=> this.Decrement()}>Decrement</button>
                <button onClick = {()=> this.Four()}>Four</button>
                <button onClick = {()=> this.Six()}>Six</button>
            </div>
        )
    }
}
export default Counter
