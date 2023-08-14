import React from 'react'
import Logo from '../assets/Arrow 05.png'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <h1>
          Travel
        </h1>

        <img src={Logo} alt=''/>
      </div>

      <ul>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Services <ArrowDropDownIcon/></a></li>
        <li><a href='#'>Upcomming Packages</a></li>
      </ul>

      <button>
      Get in Touch
      </button>
    </div>
  )
}

export default Navbar