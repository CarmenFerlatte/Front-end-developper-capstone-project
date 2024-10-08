import React, { useState } from 'react';
import '../styles/nav.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo_300.png';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbar'>
      <div className='navbar__logo'>
        <img src={ logo } alt="logo" />
      </div>
      <button className='navbar__burger' onClick={toggleMenu}>
        ☰
      </button>

      <nav className={`navbar__menu ${isMenuOpen ? 'navbar__menu--open' : ''}`}>
      <ul>
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''} title="Accueil">Accueil</Link>
        </li>
        <li>
          <Link to="/#a_propos" title="À propos !">À propos</Link>
        </li>
        <li>
          <Link to="/#menu" title="Menu">Menu</Link>
        </li>
        <li>
          <Link to="/reservations" className={location.pathname === '/reservations' ? 'active' : ''} title="Réservations">Réservations</Link>
        </li>
        <li>
          <Link to="/#commande" title="Commande en ligne">Commande en ligne</Link>
        </li>
        <li>
          <Link to="/#contact" title="Contact">Contact</Link>
        </li>
      </ul>
    </nav>
    </div>
  )
};

export default Nav;