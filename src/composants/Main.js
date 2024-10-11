// Main.js
import React, { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/main.css';
import Specialisations from './Specialisations';
import Chicago from './Chicago';
import Temoignages from './Temoignages';
import BookingPage from './BookingPage';
import { initializeAvailableTimes, updateTimes } from '../js/utils';
import { submitAPI } from '../js/api';

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeAvailableTimes());
  const navigate = useNavigate();

  const submitForm = async (formData) => {
    const result = submitAPI(formData);
    if (result) {
      navigate('/confirmation');  
    } else {
      alert("Désolé, il y a eu un problème lors de l'enregistrement de votre réservation. Veuillez réessayer.");
    }
  };

  console.log("submitForm in Main:", submitForm);

  return (
    <div className="main">
      <Specialisations/>
      <Temoignages/>
      <Chicago/>
      <BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
    </div>
  );
};

export default Main;