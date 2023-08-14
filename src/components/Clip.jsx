import React from 'react'
import './booking.css'
import tripmage from '../assets/tripmage.png'

const Clip = () => {
      
  return (
    <div className='clip clip-row'>
        <img src={tripmage} alt=''/>
        <div className='load-trip-details'>
            <h5>Ongoing</h5>
            <p>Trip to rome</p>
            <div className='booking-text'>
            <p class="progress-text"><span class="percentage">40%</span> completed</p>
            </div>
            <div class="linear-load-bar">
                <div class="linear-load-progress"></div>
            </div>
        </div>
    </div>
  )
}

export default Clip