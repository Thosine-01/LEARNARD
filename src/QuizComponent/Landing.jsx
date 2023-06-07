import React from 'react'
import Nav from './nav/Nav'
import Hero from './hero/Hero'
import About from './about/About'
import Categories from './categories/Categories'
import Community from './community/Community'
import Contact from './contact/Contact'
import Footer from './footer/Footer'

export default function Landing() {
  return (
    <div>
        <Nav />
        <Hero />
        <About />
        <Categories />
        <Community />
        <Contact />
        <Footer />
    </div>
  )
}
