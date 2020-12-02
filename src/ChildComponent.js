import React from 'react'

function ChildComponent(pros) {
    return (
        <div>
            <button onClick = {pros.greetHandler}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent

