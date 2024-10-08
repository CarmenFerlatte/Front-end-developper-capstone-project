import React, { useReducer } from 'react';
import '../styles/main.css';
import Specialisations from './Specialisations';
import Chicago from './Chicago';
import Temoignages from './Temoignages';
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

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeAvailableTimes());
  console.log("dispatch in Main:", dispatch); // Ajoutez ce log pour vérifier `dispatch`

  return (
    <div className="main">
      <Specialisations/>
      <Temoignages/>
      <Chicago/>
      <BookingPage availableTimes={availableTimes} dispatch={dispatch} />
    </div>
  );
};

export default Main;