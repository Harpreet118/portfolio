import React from 'react'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Tech from './components/Tech'
import Expre from './components/Expre'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PageNotFound from './components/PageNotFound'



export default function App() {
  return (
    <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <Navbar/>
      <Profile/>
      <Tech/>
      <Expre/>
      <Contact/>
      <Footer/>
      <PageNotFound/> 
    </div>
    
      
  
  )
}
