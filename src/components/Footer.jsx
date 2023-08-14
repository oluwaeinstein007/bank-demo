import React, { useState } from 'react';
import Logo from '../assets/Arrow 05.png'
import Messanger from '../assets/025-messenger.png'
import Linkdln from '../assets/052-linkedin.png'
import Twitter from '../assets/096-twitter.png'
import Two from '../assets/097-twoo.png'
import './footer.css'
import Hidden from '../assets/Footer img.png'

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    
  };

  const [enteredEmail, setEnteredEmail] = useState('');

  const handleEmail = (newEmail) => {
    setEnteredEmail(newEmail);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted email: ${enteredEmail}`);
  };


  return (
    <div className='footer'>
      <div className='footer-text'>
        <div className='travel'>
          <div className='travel-logo'>
            <h3>Travel</h3>
            <img src={Logo} alt=''/>
          </div>

          <h3>Travel helps companies manage payments easily.</h3>

          <div className='images'>
            <img src={Linkdln} alt=''/>
            <img src={Messanger} alt=''/>
            <img src={Twitter} alt=''/>
            <img src={Two} alt=''/>
          </div>
        </div>
        
        <div className='footer-body'>
          <h1 className='main'>Company</h1>
          <div className='small-text'>
            <a href='#'>About Us</a>
            <a href='#'>Careers</a>
            <a href='#'>Blog</a>
            <a href='#'>Pricing</a>
          </div>
        </div>

        <div className='footer-body'>
          <h1 className='main'>Destinations</h1>
          <div className='small-text'>
            <a href='#'>Maldives</a>
            <a href='#'>Los Angelas</a>
            <a href='#'>Las Vegas</a>
            <a href='#'>Torronto</a>
          </div>
        </div>

        <div className='news'>
          <h1 className='main'>Join Our Newsletter</h1>
          <div className='email'>
            <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            />
             <button type="submit">Submit</button>
          </div>

          <p className=''>* Will send you weekly updates for your better tour packages.</p>
        </div>
      </div>

      <h2 className='copy-right'>Copyright @ Xpro 2022. All Rights Reserved.</h2>

      <img src={Hidden} alt='' className='footer-image'/>
    </div>
  )
}

export default Footer