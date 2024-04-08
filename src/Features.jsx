import React from 'react'
import './features.css'

const Features = () => {
  return (
    <div id='about' className='main-features-container'>
          <div className='features-title'>
              <h2>About All4One</h2>
              <p>By integrating AI tools within a user-friendly platform built on blockchain technology, All4One
empowers users to <br />leverage AI tools for content creation, marketing, and other tasks within the familiar Web 2.0
environment.  <br />All4One simplifies AI access, making it a practical tool for everyday use. All4One's blockchain foundation positions users at the <br /> forefront of the Web 3.0 revolution.
With user-friendly tools, individuals can participate in a decentralized economy, engage with
NFTs, and manage <br /> tokenized assets with ease.</p>
          </div>
          
          <div className='features-lists'>
        <div className="glass-container">
          <img className='features-img-1' src="./blockchain.png" alt="icon" />
              {/* <img className='features-img-1' src="./bitcoin-btc-logo.png" alt="img" /> */}
                  <div className="glass-content">
      <span>Accessibility</span>
      <p>We believe that powerful technology should be available to everyone. All4One
prioritizes user-friendliness, ensuring that both individuals and businesses can
leverage AI and blockchain tools seamlessly.</p>
                  </div>
          </div> 
          
              <div className="glass-container">
              <img className='features-img-2' src="./puzzle.png" alt="img" />
              {/* <img className='features-img-2' src="./thorchain-rune-logo.png" alt="img" /> */}
                  <div className="glass-content">
      <span>Security</span>
      <p>In the digital age, trust is paramount. All4One prioritizes robust security measures,
offering a safe and reliable environment for users to explore the potential of AI and
blockchain</p>
                  </div>
          </div> 
          
              <div className="glass-container">
              <img className='features-img-3' src="./complexity.png" alt="img" />
                  <div className="glass-content">
      <span>Transparency</span>
      <p>We believe in fostering an open and transparent ecosystem. This means providing
clear information about how our platform operates and ensuring responsible data
management practices.</p>
                  </div>
          </div>
          <div className="glass-container">
              <img className='features-img-4' src="./artificial-intelligence.png" alt="img" />
              {/* <img className='features-img-4' src=".\shiba-inu-shib-logo.png" alt="img" /> */}
                  <div className="glass-content">
      <span>Innovation</span>
      <p>All4One is constantly evolving and committed to pushing the boundaries of what's
possible. We strive to develop new and innovative solutions that empower users in the
ever-evolving digital landscape.</p>
                  </div>
          </div>
      
              
      </div>
      
      {/* ------------mission and vision----------------- */}

      {/* <div className='mission-vision-container'>
        <div>
        <span>Our Mission</span>
        <p>Our mission is to dismantle the barriers that currently hinder the widespread adoption of AI
and blockchain technology. We <br /> aim to empower individuals and businesses alike by providing a
user-friendly platform that <br /> unlocks the immense potential of these technologies.</p>
        </div>

        <div>
        <span>Our Vision</span>
        <p>We envision a future where AI and blockchain are not exclusive tools for the privileged few, but
rather accessible and empowering forces for <br /> everyone. All4One strives to be at the forefront
of this revolution, creating a platform that fosters creativity, innovation, and <br /> a more inclusive
digital future.</p>
        </div>

        <div>
          <img className='macbook' src="./MacBook Air.png" alt="img" />
        </div>
        </div> */}
    </div>
  )
}

export default Features
