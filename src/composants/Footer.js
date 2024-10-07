import React from 'react';
import '../styles/footer.css';
import bbq from '../images/bbq.jpg';


const footer = () => {
  return (
    <div className='footer'>
      <div className='footer__container'>
        <div className='footer__container-img'>
          <img src={bbq} alt="plat cuisiné" />
        </div>
        <div className='footer__container_nav-1'>
          <h3>Navigation</h3>
          <ul>
            <li>Accueil</li>
            <li>À propos</li>
            <li>Menu</li>
            <li>Réservations</li>
            <li>Commande en ligne</li>
            <li>Login</li>
          </ul>
      </div>
      <div className='footer__container_nav-2'>
        <h3>Contact</h3>
        <p>Adresse: 123 rue de la paix</p>
          <p>Téléphone: 01 02 03 04 05</p>
          <p>Email:</p>
        </div>
        <div className='footer__container_nav-3'>
          <h3>Médias sociaux</h3>
          <p>Facebook</p>
          <p>instagram</p>
          <p>Linkedin</p>
        </div>

      </div>

    </div>
  )
}

export default footer
