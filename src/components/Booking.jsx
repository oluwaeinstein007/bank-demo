import React from 'react'
import './booking.css'
import swim from '../assets/swim.svg'
import rectangle from '../assets/rectangle.svg'
import car from '../assets/car.svg'
import send from '../assets/send.svg'
import leaf from '../assets/leaf.svg'
import map from '../assets/map.svg'
import building from '../assets/building.svg'
import beach from '../assets/beach.jpeg'
import Clip from './Clip'
import Plus from './Plus'
import Aeroplane from '../assets/plane.png'

const Booking = () => {
    const icons = [
        {
          "image": leaf
        },
        {
            "image": map
          },
          {
            "image": send
          },
      ]
    const info = [
        {
          "image": rectangle,
          "title": "Swimming Pool",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."
        },
        {
            "image": swim,
            "title": "Swimming Pool",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."
          },
          {
            "image": car,
            "title": "Swimming Pool",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."
          },
      ]
      
  return (
    <div className='booking booking-row'>
        <div className='booking-desc'>
           <h2>Fast & Easy</h2>
           <h1>Get Your Favourite Resort Bookings</h1>
           <div className='booking-pecks'>
           {info.map((item, index) => (
                <div className='booking-peck booking-row' key={index}>
                <img src={item.image} alt='' />
                <div className='booking-peck-details'>
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                </div>
                </div>
            ))}
           </div>
        </div>

        <div className='load-trip'>
            <div className='trip-card'>
                <img src={beach} alt=''/>
                <h4>Trip to Hawaii </h4>
                <div className='trip-card-details trip-row'>
                    <p>14-29 June</p>
                    <p>by JR Martinax</p>
                </div>
                
                <div className='trip-card-icon trip-row' >
                    {icons.map((item, index) => (
                        <div className='trip-ball' key={index}>
                            <img src={item.image} alt=''/>
                        </div>
                    ))}
                </div>

                <div className='trip-card-interest trip-row'>
                    <img src={building} alt=''/>
                    <p>60 people are interested</p>
                </div>

            </div>
            <Clip/>
            <Plus/>
            <img src={Aeroplane} alt='' className='aeroplane'/>
        </div>
          
        
    </div>
  )
}

export default Booking