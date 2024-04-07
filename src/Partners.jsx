import React from 'react'
import './partners.css'

const Partners = () => {
    const partners = [
        {coin:'./ethereum-eth-logo.png'},
        {coin:'./tron-trx-logo.png'},
        {coin:'./solana-sol-logo.png'},
        {coin:'./polygon-matic-logo.png'},
    ]
  return (
      <div className='partners-main-container'>
          <span className='partners-title'>Our Partners</span>
          <div className='partners'>

          {partners.map((item) => {
              return <img className='partners-img' src={item.coin} alt="image" />
                     
          })}
              </div>
    </div>
  )
}

export default Partners
