import React, { useReducer } from 'react';
import '../styles/header.css';
import bbq from '../images/restauranfood_500.png';
import BookingPage from './BookingPage';

const initializeAvailableTimes = () => {
  return [
    '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
  ];
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // Pour l'instant, on revoie les mêmes heures disponibles quelle que soit la date.
      return initializeAvailableTimes();
    default:
      return state;
  }
};

const CallToAction = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeAvailableTimes());
  console.log("dispatch in CallToAction:", dispatch); // Ajoutez ce log pour vérifier `dispatch`

  return (
    <div className="header">
      <div className="header__container">
        <div className='header__container-text'>
          <h1>Restaurant Petit Citron</h1>
          <h2>Chicago</h2>
          <p>Le meilleur restaurant de la région. <br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br></br>sed do eiusmod tempor et dolore magna aliqua.</p>
          <BookingPage availableTimes={availableTimes} dispatch={dispatch} />
        </div>
        <div className='header__container-img'>
          <img src={bbq} alt="plat cuisiné" />
        </div>
      </div>
    </div>
  )
}

export default CallToAction;