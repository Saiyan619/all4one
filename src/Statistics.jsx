import React from 'react'
import './statistics.css'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Statistics = () => {
    const [ref, InView] = useInView({
        triggerOnce: false,
        threshold:0.2
      })
  return (
      <div id='tokenomics' className='main-statistics-container'>
           <h5>tokenomics</h5>

          <div className='test'>
              <motion.div
                   ref={ref}
                   initial={{ opacity: 0, y: 20 }}
                   animate={InView ? {opacity: 1, y: 0 } : {}}
                   exit={{ opacity: 0, x: -20 }}
                     transition={{ duration: 0.5, delay: 0.5 }}
                  className='sub-statistics-container'>
              <div>
          <p>Total Supply</p>
                  <span>2'222'222'222 Tokens</span>
                  </div>
              <img src="./Screenshot_2024-04-05_at_21-48-48_All4One_-_Whitepaper-1-1_1_.pdf-removebg-preview.png" alt="img" />
          </motion.div>
          
              <motion.div
                   ref={ref}
                   initial={{ opacity: 0, y: 20 }}
                   animate={InView ? {opacity: 1, y: 0 } : {}}
                   exit={{ opacity: 0, x: -20 }}
                     transition={{ duration: 0.5, delay: 0.5 }}
                  className='sub-statistics-container'>
              <div>
                  </div>
              <img src="./Screenshot_2024-04-05_at_21-55-16_All4One_-_Whitepaper-1-1_1_.pdf-removebg-preview.png" alt="img" />
              </motion.div>
              </div>
    </div>
  )
}

export default Statistics
