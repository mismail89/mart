import React from 'react'
import '../styles/hero.css'
export default function hero() {
    const stylee = {
        backgroundImage: 'url(./images/hero.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: ' rgba(255, 0, 0, 1);'
        }
    
  return (
    <>
    <div style={stylee} className='main-hero-section'>
        <div className='main-hero-section'>
        <div className='main-hero-image'>
        <h1>Hassle-Free Junk And Furniture Removal Services In Dubai!</h1>
        <p>Reclaim your space with our fast and comfortable removals in Dubai. From furniture to appliances, we'll handle the heavy lifting, giving you a clutter-free home in no time. Contact us for a hassle-free solution today!</p>
        <a href="" className='py-3 px-6 bg-yellow-600 text-white'>Discover More</a>
        </div>
        </div>
    </div>
    </>
  )
}
