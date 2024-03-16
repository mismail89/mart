import React from 'react'
import { CgCheckR } from "react-icons/cg";
import '../styles/tick.css';
export default function tick() {
  return (
    <>
    <div className='main-tick-page flex'>
        <div className='tick-page'>
            <div className='left-tick'>
                <img src="./images/review.png" alt="" />
            </div>
            <div className='right-tick'>
                <div className='top-right-tick'>
                    <h3>Junk Removal Services</h3>
                    <h1>Get Rid from Junk Collection</h1>
                    <p>Did you replace or buy new furniture for your home or office and having issues about old appliances disposition? Then fret not, Free junk removal services have covered you. Our junk removal Services include:</p>
                </div>
                <div className='bottom-right-tick'>
                    <div className='one-right'>
                        <h1><p><CgCheckR /></p>Free Junk Removal Service</h1>
                        <h1><p><CgCheckR /></p>Guarantee 100% Satisfaction</h1>
                    </div>
                    <div className='one-right'>
                    <h1><p><CgCheckR /></p>quick junk removal</h1>
                    <h1><p><CgCheckR /></p>24-hour junk removal</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
