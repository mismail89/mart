import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import '../styles/navbar.css';
import { useState } from 'react';
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';
export default function navbar() {
    const [open, setOpen] = useState(false);
    const style = {
        display: 'flex',
        height: '230px'
    }
    const menue = (e) => {
        e.preventDefault();
        setOpen(!open);
    }
  return (
    <>
    <div className='top-navbar-parent bg-slate-800 text-white flex py-4'>
        <div className='top-navbar-content'>
            <div className='top-nav-cal-email-div'>
                <a href="tel:+971586115093"><p className=' text-yellow-700'><IoCall /></p> +971 58 611 5093</a>
                <a href="mailto:info@free-junkremoval.com"><p className='text-yellow-700'><MdEmail /></p> info@free-junkremoval.com</a>
            </div>
            <div className='top-nav-icons-dev'>
                <a href=""><FaFacebookSquare /></a>
                <a href=""><FaInstagramSquare /></a>
                <a href=""><FaXTwitter /></a>
                <a href=""><FaYoutube /></a>
            </div>
        </div>
    </div>
    {/* ////// start bottom navbar /////// */}
    <div className='bottom-navbar-div flex mt-4 pb-3 items-center justify-center'>
        <div className='bottom-navbar-content'>
            <div className='bottom-nav-logo'>
                <img src="./images/logo.png" alt="" />
            </div>
            <div className='bottom-nav-links'>
                <div className='bottom-links'>
                <Link to={'/'}>
                    <a href="" className=' text-yellow-500'>Home</a>
                    </Link>
                    <Link to={'/about'}>
                    <a href="">About</a>
                    </Link>

                    <Link to={'/services'}>
                    <a href="">Services</a>
                    </Link>
                    <Link to={'/contact'}>
                    <a href="">Contact</a>
                    </Link>
                    <a href="" id='search' className=' font-bold'><CiSearch /></a>
                </div>
                <div className='bottom-logos-search'>
                    <a href="" onClick={menue}>{open ? <RxCross1 /> :<RxHamburgerMenu /> }</a>
                    <a href=""><CiSearch /></a>
                </div>
            </div>
        </div>
    </div>
    {/* /////// mobile navbar ///// */}
    <div className='mb-icons  bg-slate-700 text-white' style={open ? style: {}}>
                <div className='bottom-mb-links py-15'>
                <Link to={'/'}>
                    <a href="" className=' py-3' onClick={()=> setOpen(!open)}>Home</a>
                    </Link>
                    <Link to={'/about'}>
                    <a href="" className='py-3' onClick={()=> setOpen(!open)}>About</a>
                    </Link>
                    <Link to={'/services'}>
                    <a href="" className='py-3' onClick={()=> setOpen(!open)}>Services</a>
                    </Link>
                    <Link to={'/contact'}>
                    <a href="" className='py-3' onClick={()=> setOpen(!open)}>Contact</a>
                    </Link>
                </div>
                </div>
    </>
  )
}
