import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
     <Link to='/'>
      <img src={logo} alt="cocktail-db-image" className='logo'/>
     </Link>
    <ul>
      <li> <Link  to='/'>Home</Link> </li>
      <li> <Link to='/About'>About</Link> </li>
    </ul>
     </div>
    </nav>
  )
}

export default Navbar
