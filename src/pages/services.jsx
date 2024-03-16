import React from 'react'
import Tick from '../components/tick'
import Cart from '../components/cart';
import Cardheader from '../components/cardheader';
import Icons from '../components/icons';

export default function services() {

    const stylee = {
        backgroundImage: 'url(./images/hero.jpg)',
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
                <h1>Services</h1>
                <p>Need urgent removal? Our 24-hour junk removal service is at your disposal, ready to tackle clutter at any hour of the day or </p>
            </div>
        </div>
    </div>
    <Tick />
    <Cardheader />
    <Cart />
    <Icons />
    </>
  )
}
