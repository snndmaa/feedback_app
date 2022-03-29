import React from 'react'
import { NavLink } from 'react-router-dom'



function Footer() {


  function Hover(e){
    e.target.style.background = 'white'
  }
  function hoverOut(e){
    e.target.style.background = 'inherit'
  }

  return (
    // <div className="navFoot">{ children }</div>
    <div className="navFoot">
      <div className='navCon'>
        <div onMouseEnter={Hover} onMouseLeave={hoverOut}>
          <NavLink to='/' id='link' activeclassname='active'>
            Home
          </NavLink>
        </div>

        <div onMouseEnter={Hover} onMouseLeave={hoverOut}>
        <NavLink to='/about' id='link' activeclassname='active'>
          About
        </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Footer