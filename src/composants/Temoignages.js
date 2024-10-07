import React from 'react';
import '../styles/main.css';
import persona1 from '../images/persona_1.webp';
import persona2 from '../images/persona_2.webp';
import persona3 from '../images/persona_3.webp';
import persona4 from '../images/persona_4.webp';

const Temoignages = () => {
  return (
    <div>
    <div className='main__container bg-fbdabb'>
      <div className='main__container-text'>
      <h2>Témoignages</h2>
      </div>

      <div className='main__container-grid'>
        <div className='main__container-grid-item'>
          <p className="note">Note</p>
          <div className='main__container-grid-item__photo'>
          <img src={persona1} alt="Marie" />
          <aside>Marie, 65 ans</aside>
          </div>
          <p>Témoignages</p>
        </div>
        <div className='main__container-grid-item'>
          <p className="note">Note  </p>
          <div className='main__container-grid-item__photo'>
          <img src={persona2} alt="Paul" />
          <aside>Paul, 35 ans</aside>
          </div>
          <p>Témoignages</p>
        </div>
        <div className='main__container-grid-item'>
          <p className="note">Note</p>
          <div className='main__container-grid-item__photo'>
          <img src={persona3} alt="Line" />
          <aside>Line, 32 ans</aside>
          </div>
          <p>Témoignages</p>
        </div>
        <div className='main__container-grid-item'>

          <p className="note">Note</p>
          <div className='main__container-grid-item__photo'>
          <img src={persona4} alt="Jake" />
          <aside>Jake, 40 ans</aside>
          </div>
          <p>Témoignages</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Temoignages
