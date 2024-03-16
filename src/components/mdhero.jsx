import React from 'react'
import '../styles/mdhero.css'
export default function mdhero() {
    const stylee = {
        backgroundImage: 'url(./images/hero.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        }
  return (
    <>
    <div className='md-hero-main flex' style={stylee}>
        <div className='main-md-hero'>
            <div className='main-hero-text'>
                <h3>FURNITURE DISPOSAL PICKUP SERVICES IN DUBAI</h3>
                <h1>24-Hour Junk Removal Service</h1>
                <p>Need urgent removal? Our 24-hour junk removal service is at your disposal, ready to tackle clutter at any hour of the day or night.</p>
                <a href="tel:+971586115093">Book Now</a>
            </div>
        </div>
    </div>
    </>
  )
}
