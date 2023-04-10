import React from 'react'
import { Link } from 'react-router-dom'
import './newStyles.css'

function Navigation(){
  return (
    <div className="navbar">
        <Link to="/Home" className='listItem'>Home</Link> 
        <Link to="/Student" className='listItem1'>Students</Link>
        <Link to="/Contact" className='listItem2'>Contact Us</Link>
    </div>
  )
}

export default Navigation