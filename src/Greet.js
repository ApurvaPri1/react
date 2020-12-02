import React from 'react';

// function Greet() {
//    return <h1>Hello Apurva</h1>
// }

// const Greet = (props) => {
  function Greet(props, state){
    const {name, homename} = props
    
  //  const {state1, state2, state3} = state
    return (
        <div>
  <h1>hello {name} a.k.a {homename} </h1> 
        </div>
)
}
export default Greet