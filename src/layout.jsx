import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer';
import Sticky from './components/sticky';

import { Outlet } from 'react-router-dom';
export default function layout() {
  return (
    <>
    <Navbar />
    <Sticky />
    <Outlet />
    <Footer />
    </>
  )
}
