import React from 'react'
import { RiShieldCheckFill } from "react-icons/ri";
import { LiaUserShieldSolid } from "react-icons/lia";
import { PiShieldStarFill } from "react-icons/pi";
import '../styles/card.css'
export default function card() {
  return (
    <>
    <div className='flex main-card-parent'>
        <div className='main-card-div'>
            <div className='card'>
                <div className='card-icons-div'>
                    <div className='icon-div'><h1><PiShieldStarFill /></h1></div>
                </div>
                <div className='card-text'>
                    <h2>Professional</h2>
                    <p>Maximize space easily with our advanced junk removal service. Say goodbye to the clutter and hello to a spacious and well organized home!</p>
                </div>
            </div>
            <div className='card'>
                <div className='card-icons-div'>
                <div className='icon-div'><h1><RiShieldCheckFill /></h1></div>
                </div>
                <div className='card-text'>
                    <h2>Best Services</h2>
                    <p>Trust us to eco-friendly junk removal in Dubai. From furniture to appliances, we handle it all professionally and perfectly</p>
                </div>
            </div>
            <div className='card'>
                <div className='card-icons-div'>
                <div className='icon-div'><h1><LiaUserShieldSolid /></h1></div>
                </div>
                <div className='card-text'>
                    <h2>24/7 Support</h2>
                    <p>Find the best solution for living with our waste disposal services. Dubai's trusted choice for a beautiful and organized destination.</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
