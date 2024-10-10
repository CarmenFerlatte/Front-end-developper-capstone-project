import React, { useReducer } from 'react';
import BookingForm from '../composants/BookingForm';

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

const Reservations = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeAvailableTimes());

  return (
    <div>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </div>
  );
}

export default Reservations;