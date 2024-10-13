import React, { useReducer, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from '../composants/BookingForm';
import { fetchAPI, submitAPI } from '../js/api';

const initializeAvailableTimes = async () => {
  const today = new Date();
  return fetchAPI(today);
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return fetchAPI(new Date(action.date));
    default:
      return state;
  }
};

const Reservations = () => {
  const navigate = useNavigate();
  const [availableTimes, dispatch] = useReducer(updateTimes, []);

  useEffect(() => {
    const fetchInitialTimes = async () => {
      const times = await initializeAvailableTimes();
      dispatch({ type: 'INITIALIZE_TIMES', times });
    };
    fetchInitialTimes();
  }, []);

  const submitForm = async (formData) => {
    console.log("formData in Reservations:", formData);
    const dateObject = new Date(formData.date);
    const result = await submitAPI({ ...formData, date: dateObject });
    if (result) {
      navigate('/confirmation');
    } else {
      alert("Désolé, il y a eu un problème lors de l'enregistrement de votre réservation. Veuillez réessayer.");
    }
  };

  return (
    <div>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
    </div>
  );
}

export default Reservations;