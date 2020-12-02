import React, { Component } from 'react'

export class ClassClick extends Component {
    clickHandlerr () {
        console.log("The button click for class")
    }
    render() {
        return (
            <div>
                <button onClick ={this.clickHandlerr}>Click Here For Class</button>
            </div>
        )
    }
}

export default ClassClick
