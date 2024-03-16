import React from 'react'
import { FaUserShield } from "react-icons/fa6";
import '../styles/icons.css';
import { RiShieldCheckFill } from "react-icons/ri";
import { LiaUserShieldSolid } from "react-icons/lia";
import { PiShieldStarFill } from "react-icons/pi";
import '../styles/card.css'
export default function icons() {
    const stylee = {
        backgroundImage: 'url(./images/img.jpeg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: ' rgba(255, 0, 0, 1);'
        }
  return (
    <>
    <div className='icon-part-hero' style={stylee}>
        <div className='icon-hero'>
            <div className='icon-part-text'>
                <h1>Free Junk Collection Dubai</h1>
                <p>When it comes to furniture removal, trust our professional team to handle the job with care and precision. We specialize in junk furniture removal service in Dubai, ensuring that your space is left clean and clutter-free.</p>
            </div>
        </div>
    </div>
    <div className='flex main-card-parent flex-col'>
        <div className='main-card-div'>
            <div className='card' id='card'>
                <div className='card-icons-div'>
                <div className='icon-div'><h1><RiShieldCheckFill /></h1></div>
                </div>
                <div className='card-text' id='card-text'>
                    <h2>Junk Disposal</h2>
                    <p>Make your homes and ofices free from junk and convert them according to your own likings. Free junk removal company has made it easy.</p>
                    <a href="">Contact Us</a>
                </div>
            </div>
            <div className='card' id='card'>
                <div className='card-icons-div'>
                <div className='icon-div'><h1><LiaUserShieldSolid /></h1></div>
                </div>
                <div className='card-text' id='card-text'>
                    <h2>Furniture Removal</h2>
                    <p id='prt'>While furniture is a common item for junk collection, these services extend to all types of unwanted clutter, including electronics.</p>
                    <a href="">Book Now</a>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
