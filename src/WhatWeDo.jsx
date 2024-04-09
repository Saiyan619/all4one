import React from 'react'
import './whatwedo.css'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const WhatWeDo = () => {
    const [ref, InView] = useInView({
        triggerOnce: false,
        threshold:0.1
      })
  return (
      <div className='what-we-do_list-main-container'>
      
          <div className='what-we-do_list-1-container'>
              <motion.div
                  ref={ref}
                  initial={{ opacity: 0, y: 20 }}
                  animate={InView ? {opacity: 1, y: 0 } : {}}
                  exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.5 }} >
                  <h3><span>Our Mission</span></h3>
                  <p>Our mission is to dismantle the barriers that currently hinder the widespread <br /> adoption of AI
and blockchain technology. We aim to empower individuals and <br /> businesses alike by providing a
user-friendly platform that unlocks the immense<br /> potential of these technologies.</p>
                  <button class="gradient-border-button">Explore Now</button>
              </motion.div>

              <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={InView ? {opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.6 }}   >
                <img src="./bg same 1.png" alt="img" />
              </motion.div>
          </div>
          
          <div className='what-we-do_list-1-container'>
              <motion.div
                  ref={ref}
                  initial={{ opacity: 0, y: 20 }}
                  animate={InView ? {opacity: 1, y: 0 } : {}}
                  exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.6 }} 
              >
                <img src="./Frame 32.png" alt="img" />
              </motion.div>

              <motion.div
                  ref={ref}
                  initial={{ opacity: 0, y: 20 }}
                  animate={InView ? {opacity: 1, y: 0 } : {}}
                  exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.5 }}   >
                  <h3><span>Our Vision</span></h3>
                  <p>We envision a future where AI and blockchain are not exclusive tools for the<br /> privileged few, but
rather accessible and empowering forces for everyone. All4One strives<br /> to be at the forefront
of this revolution, creating a platform that fosters creativity, innovation,<br /> and  a more inclusive
digital future.</p>
                  <button class="gradient-border-button">Explore Now</button>
              </motion.div>
          </div>
          

          {/* ----------------------- */}
          
          <div className='what-we-do_list-second-section'>
              <div>
                  <h4>Use Money in your Wallet</h4>
                  <p>Cryptocurrency is a digital form of currency that utilizes <br />
                      cryptography to secure transactions, control the creation of new <br /> units, and verify the transfer of assets.
                  </p>
              </div>
              <div>
                  <img src="./Frame 55.png" alt="img" />
              </div>
          </div>
          
          <div>
              <div></div>
              <div></div>
          </div>
         
    </div>
  )
}

export default WhatWeDo
