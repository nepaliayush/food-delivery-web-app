import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
const Navbar = () => {
  return (
    <div>
        <div className="navbar">
            <img  className='logo' src={assets.logo} alt="" srcset="" />
            <img  className='logo' src={assets.profile_image} alt="" srcset="" />
        </div>
      
    </div>
  )
}

export default Navbar
