import React from 'react';
import '../styles/main.css';
import salade from '../images/salade_grecque__600x385.png';
import bruchetta from '../images/bruchetta__600x385.png';
import dessert from '../images/gateaucitron__600x385.png';

const Specialisations = () => {
  return (
    <div>
    <div className="main__container">
      <div className='main__container-flex'>
        <div className='main__container-flex-title'>
          <h2>Spéciaux de la semaine</h2>
          </div>
          <div className='main__container-flex-button'>
          <button className='main__container-button'>Voir le menu</button>
        </div>
      </div>
    </div>
      <div className='main__container-grid'>
        <div className='main__container-grid-menu'>
          <img src={salade} alt="salade grecque" />
          <div className='main__container-grid-menu-header'>
            <h3>Salade grecque</h3>
            <span>12,99 $</span>
          </div>
          <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
          <h4>Commande livraison</h4>
        </div>
        <div className='main__container-grid-menu'>
          <img src={bruchetta} alt="bruchetta" />
          <div className='main__container-grid-menu-header'>
            <h3>Bruchetta</h3>
            <span>5,99 $</span>
          </div>
          <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
          <h4>Commande livraison</h4>
        </div>
        <div className='main__container-grid-menu'>
          <img src={dessert} alt="Dessert au citron" />
          <div className='main__container-grid-menu-header'>
            <h3>Dessert au citron</h3>
            <span>5,00 $</span>
          </div>
          <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
          <h4>Commande livraison</h4>
        </div>
      </div>
  </div>
  )
}

export default Specialisations
