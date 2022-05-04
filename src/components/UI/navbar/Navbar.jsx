import React from 'react'
import { BrowserRouter, Route, Router, Switch, Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar__links'>
            <Link className='navbar__links__link' to='/posts'> posts </Link>
            <Link className='navbar__links__link' to='/about'> about </Link>
        </div>
    </div>
  )
}

export default Navbar