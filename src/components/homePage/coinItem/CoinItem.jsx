import React from 'react'
import './coinItem.css'
const CoinItem = ({data}) => {

    
    const  { name, image, symbol, current_price, market_cap, price_change_percentage_24h } = data
  return (
    <div className= 'coins'>
            <img className='coin-img' src={image} alt={name} />
            <span className='coin-name' >{name}</span>
            <span className='coin-symbol' >{symbol.toUpperCase()}</span>
            <span className='coin-price' >$ {current_price.toLocaleString()}</span>
            <span className={price_change_percentage_24h > 0 ? 'coin-green' : 'coin-red'} >{price_change_percentage_24h.toFixed(2)}</span>
            <span className='coin-marketCap' >$ {market_cap.toLocaleString()}</span>
        </div>
  )
}

export default CoinItem