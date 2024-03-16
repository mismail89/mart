import React from 'react';
import '../styles/herocard.css';

export default function herocard() {
    const stylee = {
        backgroundImage: 'url(./images/ch1.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: ' rgba(255, 0, 0, 1);'
        }
        const styleee = {
            backgroundImage: 'url(./images/ch2.jpg)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundColor: ' rgba(255, 0, 0, 1);'
            }
            const styl = {
                backgroundImage: 'url(./images/ch3.jpg)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundColor: ' rgba(255, 0, 0, 1);'
                }
  return (
    <>
    <div className='hero-card-section-parent flex'>
        <div className='main-hero-div'>
            <div className='hero-section' style={styleee}>
                <div className='hero-section-text'>
                    <h1>Junk Electronic Removal</h1>
                    <a href="tel:+971586115093">Book Now</a>
                </div>
            </div>
            <div className='hero-section' style={stylee}>
                <div className='hero-section-text'>
                    <h1>Junk Appliances Removal</h1>
                    <a href="tel:+971586115093">Book Now</a>
                </div>
            </div>
            <div className='hero-section' style={styl}>
                <div className='hero-section-text'>
                    <h1>Junk Furniture Removal</h1>
                    <a href="tel:+971586115093">Book Now</a>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}
