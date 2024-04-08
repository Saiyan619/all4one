import React from 'react'
import { useState } from 'react'
import { Spin as Hamburger } from 'hamburger-react'
import './navbar.css'

const Navbar = () => {
  const [toggleNav, settoggleNav] = useState(true)
  const [isOpen, setOpen] = useState(false)

  function toggle() {
    settoggleNav(!toggleNav)
  }

  const scrollToTokenomics = () => {
    const teamSection = document.getElementById('tokenomics');
    teamSection.scrollIntoView({ behavior: 'smooth' });
  }; const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  }; const scrollToRoadmap = () => {
    const contactSection = document.getElementById('roadmap');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }; const scrollToFaq = () => {
    const serviceSection = document.getElementById('FAQ');
    serviceSection.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div>
          <nav>
        <div><img className='logo' src="./Ellipse 2.png" alt="logo" /></div>
              
        <div className={toggleNav ?  'responsive-nav' : 'responsive-nav_active'}>
        <ul>
                 
                  <li onClick={scrollToAbout}>About us</li>
                  <li onClick={scrollToTokenomics}>tokenomics</li>
                  <li onClick={scrollToRoadmap}>roadmap</li>
                  <li onClick={scrollToFaq}>FAQ</li>
              </ul>

          {/* <button className='nav-btn'>Buy Now</button> */}
          <button className='gradient-border-button'>Buy Now</button>
        </div>

        <div onClick={toggle} className='hamburger'>
        <Hamburger color="#ffff" toggled={isOpen} toggle={setOpen} />
        </div>
      </nav>
    </div>
  )
}

export default Navbar
