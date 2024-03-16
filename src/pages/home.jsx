import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Card from '../components/card'
import Post from '../components/post'
import Mdhero from '../components/mdhero';
import Footer from '../components/footer';
import Cardheader from '../components/cardheader';
import Cart from '../components/cart';
import Mainpost from '../components/mainpost';
import Icons from '../components/icons';
import Sticky from '../components/sticky';
import Herocard from '../components/herocard';
import Tick from '../components/tick'
export default function home() {
  return (
    <>
    <Hero />
    <Card />
    <Post />
    <Mdhero />
    <Cardheader />
    <Cart />
    <Mainpost />
    <Icons />
    <Tick />
    <Herocard />
    </>
  )
}
