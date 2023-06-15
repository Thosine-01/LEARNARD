import React from 'react'
import Nav from '../QuizComponent/nav/Nav'
import Hero from '../QuizComponent/hero/Hero'
import About from '../QuizComponent/about/About'
import Categories from '../QuizComponent/categories/Categories'
import Community from '../QuizComponent/community/Community'
import Contact from '../QuizComponent/contact/Contact'
import Footer from '../QuizComponent/footer/Footer'

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
