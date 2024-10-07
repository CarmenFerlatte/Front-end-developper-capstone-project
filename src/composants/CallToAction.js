import React from 'react';
import '../styles/header.css';
import bbq from '../images/restauranfood_500.png';
import BookingPage from './BookingPage';

const CallToAction = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className='header__container-text'>
          <h1>Restaurant Petit Citron</h1>
          <h2>Chicago</h2>
          <p>Le meilleur restaurant de la région. <br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br></br>sed do eiusmod tempor et dolore magna aliqua.</p>
          <BookingPage/>
        </div>
        <div className='header__container-img'>
          <img src={bbq} alt="plat cuisiné" />
        </div>
      </div>
    </div>

  )
}

export default CallToAction
