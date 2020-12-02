import React from 'react'

function FunctionClick() {
    function clickHnadler () {
        console.log("button Click For Function")
    }
    return (
        <div>
            <button onClick = {clickHnadler}>Click Here For Function Click</button>
        </div>
    )
}

export default FunctionClick
