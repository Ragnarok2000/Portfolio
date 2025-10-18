import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Service from './components/service/Service'
import MyWrok from './components/mywork/MyWrok'
import Contact from './components/contactUs/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
      <MyWrok/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
