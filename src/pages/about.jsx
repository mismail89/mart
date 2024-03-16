import React from 'react'
import '../styles/icons.css';
import Post from '../components/post';
import { CgCheckR } from "react-icons/cg";
import Mainpost from '../components/mainpost';


export default function about() {
    const stylee = {
        backgroundImage: 'url(./images/about.webp)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: ' rgba(255, 0, 0, 1);'
        }
        const styleee = {
            backgroundImage: 'url(./images/gpt.jpg)',
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
                <h1>About</h1>
                <p>Need urgent removal? Our 24-hour junk removal service is at your disposal, ready to tackle clutter at any hour of the day or </p>
            </div>
        </div>
    </div>
    <Post />
    <div className='icon-part-hero' style={styleee}>
        <div className='icon-hero'>
            <div className='icon-part-text'>
                <h1>Free Junk Collection Dubai</h1>
                <p>When it comes to furniture removal, trust our professional team to handle the job with care and precision. We specialize in junk furniture removal service in Dubai, ensuring that your space is left clean and clutter-free.</p>
            </div>
        </div>
    </div>

    {/* //////// another section /////// */}
    <div className='main-tick-page flex'>
        <div className='tick-page'>
            <div className='left-tick'>
                <img src="./images/about2.jpg" alt="" />
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
    <Mainpost />
    </>
  )
}
