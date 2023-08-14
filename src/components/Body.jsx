import React from 'react'
import './body.css'
import Picture1 from '../assets/Group 1000001690.png'
import Picture2 from '../assets/Group 1000001691.png'
import Picture3 from '../assets/Group 1000001692.png'
import Picture4 from '../assets/Group 1000001693.png'

const Body = () => {
  return (
    <div className='category'>
      <h2>CATEGORY</h2>
      <h1>We Offer Best Services</h1>

      <div className='category-box'>
        <div className='box'>
            <img src={Picture1} alt=''/>
            <h1>Guided Tours</h1>
            <p>
            sunt qui repellat saepe quo velit aperiam id aliquam placeat.
            </p>
            <div className='rect'></div>
        </div>

        <div className='box'>
            <img src={Picture2} alt=''/>
            <h1>Best Flights Options</h1>
            <p>
            sunt qui repellat saepe quo velit aperiam id aliquam placeat.
            </p>
            <div className='rect'></div>
        </div>

        <div className='box'>
            <img src={Picture3} alt=''/>
            <h1>Religious Tours</h1>
            <p>
            sunt qui repellat saepe quo velit aperiam id aliquam placeat.
            </p>
            <div className='rect'></div>
        </div>

        <div className='box'>
            <img src={Picture4} alt=''/>
            <h1>Medical insurance</h1>
            <p>
            sunt qui repellat saepe quo velit aperiam id aliquam placeat.
            </p>
            <div className='rect'></div>
        </div>
      </div>


    </div>
  )
}

export default Body