import React from 'react';
import '../styles/main.css';
import '../styles/chicago.css';
import resto1 from '../images/bbq.jpg';
import resto2 from '../images/restaurantfood_342x512.webp';

const Chicago = () => {
  return (
    <div>
      <div className='container__chicago'>

          <div className='container__chicago-apropos'>
              <div className='container__chicago-apropos__titre'>
              <h2>Little Lemon</h2>
              <h3>Chicago</h3>
          </div>
            <div className='container__chicago-apropos__texte'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
          <div className='container__chicago-images'>
            <img className='resto-1' src={resto1} alt="bbq" />
            <img className='resto-2' src={resto2} alt="plat cuisiné" />

          </div>

        </div>
    </div>
  )
}

export default Chicago
