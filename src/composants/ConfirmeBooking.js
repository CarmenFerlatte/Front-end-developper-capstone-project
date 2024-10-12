import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/confirmation.css';

const ConfirmeBooking = () => {
  const location = useLocation();
  return (
    <>
    <div className='container__confirmation'>
      <h1>Réservation Confirmée</h1>
      <p>Merci pour votre réservation. Nous avons bien reçu votre demande.</p>
      <p>Vous recevrez un email de confirmation sous peu.</p>
      <p>L'équipe du Restaurant Petit Citron <span class="check"> ✔ </span> </p>
      <div className="lien-retour"><Link to="/" className={location.pathname === '/' ? 'active' : ''} title="Accueil" ><p>Accueil</p></Link></div>
    </div>
    </>
  )
}

export default ConfirmeBooking
