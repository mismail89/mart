import React from 'react'
import '../styles/mainpost.css';
import { TiTick } from "react-icons/ti";
export default function mainpost() {
  return (
    <>
    <div className='main-bottom-post-div'>
        <div className='bottom-post-div'>
            <div className='bottom-post-text-div'>
                <div className='main-post-header-text'>
                    <h1>Junk Removal Services</h1>
                    <p>Junk removal services offer more than just waste disposal. We provide a valuable service, helping you reclaim space, improve your home’s aesthetics, and even contribute to a more sustainable environment.</p>
                </div>
                <div className='main-post-icons-bpost'>
                    <div className='bpost-icons'>
                        <div className='correct-icons'>
                            <p><TiTick /></p>
                            <p><TiTick /></p>
                            <p><TiTick /></p>
                            <p><TiTick /></p>
                        </div>
                        <div className='bpost-div-for-text'>
                            <p>Junk Pickup in Dubai</p>
                            <p>Junk Collection Services</p>
                            <p>free junk removal dubai</p>
                            <p>furniture removal services</p>
                        </div>
                    </div>
                    <div className='bpost-icons'>
                        <div className='correct-icons'>
                            <p><TiTick /></p>
                            <p><TiTick /></p>
                            <p><TiTick /></p>
                            <p><TiTick /></p>
                        </div>
                        <div className='bpost-div-for-text'>
                            <p>junk collection dubai</p>
                            <p>furniture disposal service</p>
                            <p>sofa removal service</p>
                            <p>junk pickup free</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bottom-post-img-div'>
                <div className='bottom-img'>
                    <img src="./images/bpost.jpg" alt="" />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
