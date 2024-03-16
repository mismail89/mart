import React from 'react'
import '../styles/cart.css';
import  { useEffect, useRef } from 'react';
export default function cart() {

      
  return (
    <>
    <div className='main-cart-parent-div flex' >
        <div className='main-cart-div'>
            <div className='main-cart'>
                <div className='cart-img-div'>
                    <div className='cart-img'>
                        <img src="./images/cart1.jpeg" alt="" />
                    </div>
                </div>
                <div className='cart-text-div'>
                    <h1>Junk Furniture Removal Dubai</h1>
                    <p>Whether you're clearing out a single room or an entire property, our furniture removal services can be customized to meet your specific requirements.</p>
                    <a href="">Book Now</a>
                </div>
            </div>
            <div className='main-cart'>
                <div className='cart-img-div'>
                    <div className='cart-img'>
                        <img src="./images/cart4.jpeg" alt="" />
                    </div>
                </div>
                <div className='cart-text-div'>
                    <h1>Junk Removal Service</h1>
                    <p>Our junk removal services extend beyond furniture and appliances. Whether you're clearing out old electronics, clothing, or household items, we have the expertise and resources to handle it all.</p>
                    <a href="">Call Now</a>
                </div>
            </div>
            <div className='main-cart'>
                <div className='cart-img-div'>
                    <div className='cart-img'>
                        <img src="./images/cart2.jpg" alt="" />
                    </div>
                </div>
                <div className='cart-text-div'>
                    <h1>Junk Electronics Removal Service</h1>
                    <p>We offer eco-friendly junk electronics removal service in Dubai, ensuring that your old gadgets are recycled or disposed of responsibly.</p>
                    <a href="">Call Now</a>
                </div>
            </div>
            <div className='main-cart'>
                <div className='cart-img-div'>
                    <div className='cart-img'>
                        <img src="./images/cart3.jpg" alt="" />
                    </div>
                </div>
                <div className='cart-text-div'>
                    <h1>Junk Appliances Removal Service</h1>
                    <p>Upgrading your appliances? Let us take care of the old ones with our junk appliances removal service in Dubai. We'll haul away your unwanted items, leaving you with more space and peace of mind.</p>
                    <a href="">Book Now</a>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
