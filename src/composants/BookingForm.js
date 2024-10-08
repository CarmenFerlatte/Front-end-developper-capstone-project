import React, { useState } from 'react';
import '../styles/form.css';

const BookingForm = ({ availableTimes, dispatch }) => {
   console.log('dispatch in BookingForm:', dispatch); // Ajoutez ce log pour vérifier `dispatch`

   const [date, setDate] = useState('');
   const [time, setTime] = useState('');
   const [guests, setGuests] = useState('');
   const [occasion, setOccasion] = useState('');

   const handleSubmit = (e) => {
      alert('Votre réservation a été enregistrée');
      e.preventDefault();
      console.log(`Date: ${date}, Time: ${time}, Guests: ${guests}, Occasion: ${occasion}`);
      clearForm();
   };

   const clearForm = () => { 
      console.log('clearing form');
      setDate('');
      setTime('');
      setGuests('');
      setOccasion('');
   }

   const handleDateChange = (e) => {
      setDate(e.target.value);
      console.log('Date changed');
      dispatch({ type: 'UPDATE_TIMES', date: e.target.value });
   }

  return (
    <div className="container">
      <h2 className="reserver-h2">Réservez une table</h2>

      <form onSubmit={handleSubmit}>
         <label htmlFor="res-date">Sélectionnez la date : <span className='red'>*</span></label>
         <input
         type="date"
         id="res-date"
         value={date}
         onChange={handleDateChange}
         aria-required="true"
         aria-label="Sélectionnez la date"
         />

         {availableTimes && availableTimes.length === 0 && <p className="red">Désolé, il n'y a pas d'heures disponibles pour cette date. Veuillez choisir une autre date.</p>}

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
         </select>
         <input className="btn-submit" type="submit" value="Réservez" aria-label="Réservez" />
      </form>

    </div>
  )
}

export default BookingForm;