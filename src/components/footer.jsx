import React from 'react'
import '../styles/footer.css';
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
export default function footer() {
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
  return (
    <>
    <div className='flex main-foooter text-white'>
        <div className='main-footer-container'>
            <div className='main-footer-form-and-links-container'>
                <form className='footer-form-div' ref={form} onSubmit={sendEmail}>
                    <div className='form-header'>
                        <h1>Free estimate</h1>
                    </div>
                    <div className='form-inputs-main-div' >
                        <div className='form-input-div'>
                            <div>
                            <label>Name</label>
                            <input type="text" name='from_name'/>
                            </div>
                            <div>
                            <label>City</label>
                            <input type="text" name='from_city'/>
                            </div>
                        </div>
                        <div className='form-input-div'>
                            <div>
                            <label>Email</label>
                            <input type="text" name='from_email'/>
                            </div>
                            <div>
                            <label>Phone</label>
                            <input type="text" name='from_phone'/>
                            </div>
                        </div>
                        <div className='input-submit'>
                            <label>Project Details</label>
                            <textarea placeholder='Project Details' name='message'></textarea>
                            <input type="submit" value={loading ? "loading....": "Send"} className="cursor-pointer" id='link'/>
                        </div>
                    </div>
                </form>
                <div className='line-div'></div>
                <div className='footer-links-div'>
                    <div className='main-links-header'>
                        <h1>Services</h1>
                        <h1>Company</h1>
                        <h1>
                            <img src="./images/logo.png" alt="" />
                        </h1>
                    </div>
                    <div className='main-links-in-footer'>
                        <div className='links-part'>
                            <h1 className='mb-header'>Services</h1>
                            <a href="">Junk Furniture Removal</a>
                            <a href="">Junk Appliances Removal</a>
                            <a href="">Junk Electronics Removal</a>
                            <a href="">Junk Removal Service</a>
                        </div>
                        <div className='links-part'>
                            <h1 className='mb-header'>Company</h1>
                            <a href="">Home</a>
                            <a href="">Services</a>
                            <a href="">About</a>
                            <a href="">Contact</a>
                        </div>
                        <div className='links-part' id='lst-part'>
                            <div className='icons-for-footer'>
                                <p><FaLocationDot /></p>
                                <p><MdEmail /></p>
                                <p><IoMdCall /></p>
                                <p><IoTime /></p>
                            </div>
                            <div className='last-icons-leave'>
                            <a href=""> Dubai, UAE</a>
                            <a href="mailto:info@free-junkremoval.com">info@free-junkremoval.com</a>
                            <a href="tel:+971586115093">+971586115093</a>
                            <a href="">Mon - Sat : 10 AM - 5 PM</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
