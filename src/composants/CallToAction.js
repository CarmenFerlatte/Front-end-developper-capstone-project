import React, { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/header.css';
import BookingPage from './BookingPage';
import { fetchAPI, submitAPI } from '../js/api';

const initializeAvailableTimes = () => {
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

const CallToAction = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeAvailableTimes());
  const navigate = useNavigate();

  const submitForm = async (formData) => {
    console.log("formData in CallToAction:", formData);
    // Convertir la date en objet Date
    const dateObject = new Date(formData.date);
    const result = await submitAPI({ ...formData, date: dateObject });
    if (result) {
      navigate('/confirmation');
    } else {
      alert("Désolé, il y a eu un problème lors de l'enregistrement de votre réservation. Veuillez réessayer.");
    }
  };

  console.log("dispatch in CallToAction:", dispatch); // Ajoutez ce log pour vérifier `dispatch`
  console.log("availableTimes in CallToAction:", availableTimes);

  return (
    <div className="header">
      <div className="header__container">
        <div className='header__container-text'>
          <h1>Restaurant little Lemon</h1>
          <h2>Chicago</h2>
          <p>Le meilleur restaurant de la région. <br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br></br>sed do eiusmod tempor et dolore magna aliqua.</p>
          <BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
        </div>
        <div className='header__container-img'>
        </div>
      </div>
    </div>
  )
}

export default CallToAction;