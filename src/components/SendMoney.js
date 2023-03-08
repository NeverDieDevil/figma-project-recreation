import React from 'react'
import Tile from './Tile'
import '../styles/SendMoney.scss'

const SendMoney = () => {
  return (
    <Tile>
    <div className='sendMoney'>
        <div className="sendMoneyText">
            <span className='send'>Send Money</span>
            <div className="yourCardCircle">
            <div className="circle"></div>
            <span className='card'>Your Card</span>
            </div>
        </div>
        <div className="moneyValue">$145,000</div>
    </div>
    </Tile>
  )
}

export default SendMoney;