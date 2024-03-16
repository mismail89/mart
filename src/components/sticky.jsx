import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import '../styles/sticky.css'
export default function sticky() {
  return (
    <div className='main-sticky'>
        <a href="tel:+971586115093"><IoIosCall /></a>
        <a href="https://wa.me/+971586115093"><IoLogoWhatsapp /></a>
    </div>
  )
}
