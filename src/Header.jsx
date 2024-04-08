import React from 'react'
import './header.css'
import Navbar from './Navbar'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Header = () => {
  const [ref, InView] = useInView({
    triggerOnce: false,
    threshold:0.2
  })
  return (
    <div className='main-header'>
          <Navbar />
          
          <div className='hero-content'>
              <div className='hero-content-left'>
          {/* <h1>Explore the largest <span>NFT</span> Marketplaces</h1> */}
          <motion.div
            ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={InView ? {opacity: 1, y: 0 } : {}}
          exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.5 }}>
            <span className='main-title'>$ALL4ONE</span>
          </motion.div>
         
          
          <motion.h1
               ref={ref}
               initial={{ opacity: 0, y: 20 }}
               animate={InView ? {opacity: 1, y: 0 } : {}}
               exit={{ opacity: 0, x: -20 }}
                 transition={{ duration: 0.5, delay: 0.7 }}
          >Combined Power of <span className='sub-span-title'>AI</span> and <span className='sub-span-title'>Blockchain</span></motion.h1>
                  <p>The All4One ecosystem revolves around the utility token that fuels
the platform's operations and incentivizes participation. $All4One
holders play a vital role in the platform's governance, development,
and value exchange </p>
                  <div className='hero-btns'>
                      <button className='hero-btns-1'>Connect Wallet</button>
                      <button  className='hero-btns-2'>Learn More</button>
                  </div>
              </div>
        <motion.div
             ref={ref}
             initial={{ opacity: 0, y: 20 }}
             animate={InView ? {opacity: 1, y: 0 } : {}}
             exit={{ opacity: 0, x: -20 }}
               transition={{ duration: 0.5, delay: 0.5 }}
          className='hero-content-right'>
                  <img className='hero-image' src="./Screenshot_2024-04-06_at_19-10-05_All4One_-_Whitepaper-1-1.pdf-removebg-preview.png" alt="hero-pic" />
              </motion.div>
          </div>
    </div>
  )
}

export default Header
