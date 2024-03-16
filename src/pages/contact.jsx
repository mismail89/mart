import React from 'react'
import '../styles/contact.css';
import { useRef, useState } from 'react';
import { FaLocationPin } from "react-icons/fa6";
import emailjs from '@emailjs/browser';
// import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";


export default function contact() {
    const [loading,  setLoading] = useState(false)
    const form = useRef();

    
    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs
          .sendForm('service_pp7f40q', 'template_ncsuj9c', form.current, {
            publicKey: '1Y0KkhzfAwPeJKCSw',
          })
          .then(
            
            () => {
              setLoading(false);
              alert("Your message has been sent!");
            },
            (error) => {
              
            },
          );
      };


    ///end form configuration/////
    const stylee = {
        backgroundImage: 'url(./images/min.jpeg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: ' rgba(255, 0, 0, 1);'
        }
  return (
    <>
    <div className='main-location-div'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d115534.36172033222!2d55.265145!3d25.188083!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1710312283381!5m2!1sen!2sus" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div className='main-form-contact-us flex'>
        <div className='contact-us'>
            <div className='left-contact-us'>
            <div className='header-contac-us'>
                <h1>Let's Talk with Us.</h1>
            </div>
            <form className='contact-us-input-divs' ref={form} onSubmit={sendEmail}>
                <div className='contact-us-input-parent'>
                    <div>
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder='Name' name='from_name' />
                    </div>
                    <div>
                        <label htmlFor="">Company</label>
                        <input type="text" placeholder='Company' name='from_company'/>
                    </div>
                </div>
                <div className='contact-us-input-parent'>
                    <div>
                        <label htmlFor="">Phone</label>
                        <input type="text" placeholder='Phone' name='from_phone'/>
                    </div>
                    <div>
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder='Email' name='from_email' />
                    </div>
                </div>
                <div className='main-textarea-contact-us'>
                    <textarea placeholder='Message' name='message'></textarea>
                    <input type="submit" value={loading ? "loading....": "Send"} />
                </div>
            </form>
            </div>
            <div className='right-contact-us'>
                <div className='right-contact-header'>
                    <h1>Get in touch.</h1>
                </div>
                <div className='line-in-contact'>
                    <div></div>
                </div>
                <div className='right-contact-main-icons-div'>
                    <div className='right-contact-anker-tags'>
                        <a href="https://maps.app.goo.gl/DSMUNjt99ttzwMAF8"><FaLocationPin /></a>
                        <a href="mailto:info@free-junkremoval.com"><MdEmail /></a>
                        <a href="tel:+971586115093"><IoCall /></a>
                    </div>
                    <div className='right-contact-text-div'>
                        <div className='contact-text-all'>
                            <h1>Head Office</h1>
                            <p>Dubai, UAE</p>
                        </div>
                        <div className='contact-text-all'>
                            <h1>Email Us</h1>
                            <p>info@free-junkremoval.com</p>
                        </div>
                        <div className='contact-text-all'>
                            <h1>Call Us</h1>
                            <p>+971 58 611 5093</p>
                        </div>
                    </div>
                </div>
                    <div className='last-contact-all'>
                        <div className='last-contact-header'>
                            <h1>Follow our social media</h1>
                        </div>
                        <div className='last-contact-links-and-logos'>
                            <a href="https://wa.me/+971586115093"><IoLogoWhatsapp /></a>
                            <a href=""><FaInstagramSquare /></a>
                            <a href=""><FaXTwitter /></a>
                            <a href=""><IoLogoYoutube /></a>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    {/* //////// start here contact card ////// */}
    <div className='icon-part-hero' style={stylee}>
        <div className='icon-hero'>
            <div className='icon-part-text'>
                <h1>Free Junk Collection Dubai</h1>
                <p>When it comes to furniture removal, trust our professional team to handle the job with care and precision. We specialize in junk furniture removal service in Dubai, ensuring that your space is left clean and clutter-free.</p>
            </div>
        </div>
    </div>
    </>
  )
}
