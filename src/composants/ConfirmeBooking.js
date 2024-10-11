import React from 'react'
import '../styles/confirmation.css';

const ConfirmeBooking = () => {
  return (
    <>
    <div className='container__confirmation'>
      <h1>Réservation Confirmée</h1>
      <p>Merci pour votre réservation. Nous avons bien reçu votre demande.</p>
      <p>Vous recevrez un email de confirmation sous peu.</p>
      <p>L'équipe du Restaurant Petit Citron <span class="check"> ✔ </span> </p>
    </div>
    </>
  )
}

export default ConfirmeBooking
