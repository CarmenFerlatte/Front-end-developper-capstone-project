import React, { useState } from 'react';
import '../styles/form.css';

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('');

  const [errors, setErrors] = useState({});

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: 'UPDATE_TIMES', date: selectedDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!date) newErrors.date = 'La date est requise.';
    if (!time) newErrors.time = "L'heure est requise.";
    if (!guests) newErrors.guests = 'Le nombre de personnes est requis.';
    if (!occasion) newErrors.occasion = "L'évènement est requis.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      const formData = { date, time, guests, occasion };
      submitForm(formData);
    }
  };

  return (
    <div className="container__form">
      <h2 className="reserver-h2">Réservez une table</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="res-date">Sélectionnez la date : <span className='red'>*</span></label>
          <input
            type="date"
            id="res-date"
            value={date}
            onChange={handleDateChange}
            aria-required="true"
            aria-label="Sélectionnez la date"
          />
          {errors.date && <span className="erreur">{errors.date}</span>}
        </div>

        {availableTimes && availableTimes.length === 0 && <p className="red">Désolé, il n'y a pas d'heures disponibles pour cette date. Veuillez choisir une autre date.</p>}

        <div className="form-group">
          <label htmlFor="res-time">Sélectionnez l'heure : <span className='red'>*</span></label>
          <select
            id="res-time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            aria-required="true"
            aria-label="Sélectionnez l'heure"
          >
            {availableTimes && availableTimes.map((time, index) => (
              <option key={index} value={time}>{time}</option>
            ))}
          </select>
          {errors.time && <span className="erreur">{errors.time}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="guests">Nombre de personnes : <span className='red'>*</span> </label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={guests} 
            onChange={(e) => setGuests(e.target.value)}
            aria-required="true"
            aria-label="Nombre de personnes"
          />
          {errors.guests && <span className="erreur">{errors.guests}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="occasion">Évènement : <span className='red'>*</span></label>
          <select
            id="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            aria-required="true"
            aria-label="Évènement"
          >
            <option>Fête</option>
            <option>Anniversaire</option>
            <option>Souper entre amis</option>
          </select>
          {errors.occasion && <span className="erreur">{errors.occasion}</span>}
        </div>

        <input className="btn-submit" type="submit" value="Réservez" aria-label="Réservez" />
      </form>
    </div>
  );
}

export default BookingForm;