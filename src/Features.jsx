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
                  <div className="glass-content">
      <span>Accessibility</span>
      <p>We believe that powerful technology should be available to everyone. All4One
prioritizes user-friendliness, ensuring that both individuals and businesses can
leverage AI and blockchain tools seamlessly.</p>
                  </div>
          </div> 
          
              <div className="glass-container">
              <img className='features-img-2' src="./puzzle.png" alt="img" />
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
                  <div className="glass-content">
      <span>Innovation</span>
      <p>All4One is constantly evolving and committed to pushing the boundaries of what's
possible. We strive to develop new and innovative solutions that empower users in the
ever-evolving digital landscape.</p>
                  </div>
          </div>
      
              
      </div>
      
     
    </div>
  )
}

export default Features
