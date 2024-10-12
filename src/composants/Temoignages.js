import React from 'react';
import '../styles/main.css';
import persona1 from '../images/persona_1.webp';
import persona2 from '../images/persona_2.webp';
import persona3 from '../images/persona_3.webp';
import persona4 from '../images/persona_4.webp';

const Star = () => {
  return <span className="star">⭐⭐⭐⭐⭐</span>;
};

const Temoignages = () => {
  return (
    <div>
    <div className='main__container bg-fbdabb'>
      <div className='main__container-text'>
      <h2 className="main__container-text-titre">Témoignages</h2>
      </div>

      <div className='main__container-grid'>
        <div className='main__container-grid-item'>
        <p className="note bt-1">Note :&nbsp; <Star /></p>
          <div className='main__container-grid-item__photo'>
          <img src={persona1} alt="Marie" />
          <aside>Marie, 68 ans</aside>
          </div>
          <p>"Nous avons célébré l'anniversaire de ma sœur au Little Lemon et tout était parfait ! La réservation a été simple, et l’équipe a été très arrangeante. Un cadre agréable pour une fête inoubliable. Merci beaucoup !"</p>
        </div>
        <div className='main__container-grid-item'>
        <p className="note">Note :&nbsp; <Star /></p>
          <div className='main__container-grid-item__photo'>
          <img src={persona2} alt="Paul" />
          <aside>Paul, 35 ans</aside>
          </div>
          <p>"Le menu du Little Lemon est exceptionnel ! Chaque plat est unique avec des options pour tous les goûts. On a adoré la créativité des plats. C'est un plaisir de découvrir de nouvelles saveurs à chaque visite !"</p>
        </div>
        <div className='main__container-grid-item'>
        <p className="note">Note :&nbsp; <Star /></p>
          <div className='main__container-grid-item__photo'>
          <img src={persona3} alt="Kim" />
          <aside>Kim, 32 ans</aside>
          </div>
          <p>"Chaque plat au Little Lemon est un délice ! Nous avons savouré des mets frais et savoureux. La qualité des ingrédients se ressent à chaque bouchée. Je recommande vivement d'essayer ce restaurant !"</p>
        </div>
        <div className='main__container-grid-item mb-20'>
        <p className="note">Note :&nbsp; <Star /></p>
          <div className='main__container-grid-item__photo'>
          <img src={persona4} alt="Jake" />
          <aside>Jake, 40 ans</aside>
          </div>
          <p>"Le service au Little Lemon est impeccable ! L'équipe est attentive et chaleureuse, rendant notre expérience encore plus agréable. Dîner ici est toujours un vrai plaisir. Merci pour votre excellent travail !"</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Temoignages
