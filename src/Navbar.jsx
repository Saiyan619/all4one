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
  return (
    <div>
          <nav>
        <div><img className='logo' src="./Ellipse 2.png" alt="logo" /></div>
              
        <div className={toggleNav ?  'responsive-nav' : 'responsive-nav_active'}>
        <ul>
                 
                  <li>About us</li>
                  <li>tokenomics</li>
                  <li>roadmap</li>
                  <li>FAQ</li>
              </ul>

          <button className='nav-btn'>Buy Now</button>
        </div>

        <div onClick={toggle} className='hamburger'>
        <Hamburger color="#ffff" toggled={isOpen} toggle={setOpen} />
        </div>
      </nav>
    </div>
  )
}

export default Navbar
