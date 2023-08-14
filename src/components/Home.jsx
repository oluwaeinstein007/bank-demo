import React from 'react'
import Navbar from './Navbar'
import './home.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Picture1 from '../assets/Ellipse 31.png'
import Picture2 from '../assets/Ellipse 32.png'
import Picture3 from '../assets/Ellipse 33.png'
import Picture4 from '../assets/Ellipse 34.png'
import Picture5 from '../assets/Ellipse 35.png'
import Picture6 from '../assets/Ellipse 36.png'


const Home = () => {
  return (
    <div className='home'>
         <Navbar/>

         <div className='title'>
            <h1>No matter where you’re going to, we’ll take you there</h1>

            <div className='box'>
                <h2>Where to?</h2>
                <h2>Travel Type <ArrowDropDownIcon/> </h2>
                <h3>Duration <ArrowDropDownIcon/> </h3>
                <button>Submit</button>
            </div>

            <div className='images'>
                <div className='img'>
                <img src={Picture1} alt=''/>
                <img src={Picture2} alt=''/>
                <img src={Picture3} alt=''/>
                <img src={Picture4} alt=''/>
                <img src={Picture5} alt=''/>
                <img src={Picture6} alt=''/>
                <div className='icon'>+</div>
                </div>

                <p>2,500 people booked Tommorowland Event in last 24 hours</p>
            </div>
        </div>

        <div className='circle'>
          <div className='inner-circle'></div>

        </div>
    </div>
  )
}

export default Home