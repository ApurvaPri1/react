import React from 'react'
import './Header.css'
import Abc from './abc.jpg'

function Header() {
  return (
    <div>
      <section className = "HeaderTop">
      <img className= "logo" src= {Abc}  alt = "Hello"/>
      {/* <section> */}
        <section className = "HeaderLogo">The Vedios</section>
        {/* <section className = "HeaderTop"> */}
          {/* <li><a href = "abcd.html">Home</a></li>
          <li>Contact</li>
          <li>AboutUs</li> */}
          </section>
      {/* </section> */}
    </div>
  )
}

export default Header
