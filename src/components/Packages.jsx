import React from 'react'
import './Packages.css'
import Couples from '../assets/couple.png'
import Abstract from '../assets/abstract.jpeg'
import Elispe1 from '../assets/Ellipse 1.png'
import Elispe2 from '../assets/Ellipse 2.png'
import Elispe3 from '../assets/Ellipse 3.png'
import HoneyMoon from '../assets/Honeymoon Packages.png'

const Packages = () => {
  return (
    <div className='packages'>
    <div className='packages-box'>
      <div className='packages-images'>
        <img src={Couples} alt=''/>
      </div>

      <div className='packages-content'>
      <h2>HONEYMOON SPECIALS</h2>
      <h1>Our Romantic Tropical Destinations</h1>
      <p>Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!</p>
      <button>View Packages</button>
      </div>
      </div>

      <img src={Elispe1} alt='' className='elispe-one'/>
      <img src={Elispe2} alt='' className='elispe-two'/>
      <img src={Elispe3} alt='' className='elispe-three'/>
      <img src={HoneyMoon} alt='' className='elispe-four'/>

      </div>
  )
}

export default Packages