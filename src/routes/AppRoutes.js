import React from 'react';
import "../index.css";
import { Routes, Route } from 'react-router-dom';
import Accueil from '../pages/Accueil';
import Reservations from '../pages/Reservations';

const AppRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Accueil/>}/>
            <Route path="/reservations" element={<Reservations/>}/>
        </Routes>
    </div>
  )
}

export default AppRoutes;