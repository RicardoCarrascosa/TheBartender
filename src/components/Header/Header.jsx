import './Header.css'
import { NavLink, Link } from 'react-router-dom'
import React from 'react'

const Header = () => {
  return (
    <header>
      <img src='/assets/icons8-bartender-64.png' alt='CriptoViewer' />
      <h2>The BarTender</h2>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/Drinks'>Drinks</NavLink>
          </li>
          <li>
            <NavLink to='/About'>About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
