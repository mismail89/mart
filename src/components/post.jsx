import React from 'react';
import '../styles/post.css';

export default function post() {
  return (
    <>
    <div className='main-post-container flex'>
    <div className='post-container'>
        <div className='post-text'>
            <h3>Who we are</h3>
            <h2>Make The Junk Disappear In Instant Clutter Free Homes</h2>
            <p>With our Junk Removal service, experience the feeling of clutter-free homes and Offices with our high-quality junk removal services. Say goodbye to unwanted items cluttering up your space when we dispose of waste quickly and efficiently. From furniture to appliances, our expert team ensures a hassle-free experience, giving your home a fresh and new lease of life.</p>
            <a href="tel:+971 58 611 5093">Call Now</a>
        </div>
        <div className='post-card'>
            <div className='post-card-part'>
                <div className='main-post-card'>
                    <h1>12K+</h1>
                    <p>PROJECT DONE</p>
                </div>
                <div className='main-post-card'>
                    <h1>13K+</h1>
                    <p>HAPPY CUSTOMERS</p>
                </div>
            </div>
            <div className='post-card-part'>
            <div className='main-post-card'>
                    <h1>100%</h1>
                    <p>CUSTOMERS SATISFIED</p>
                </div>
                <div className='main-post-card'>
                    <h1>20+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}
