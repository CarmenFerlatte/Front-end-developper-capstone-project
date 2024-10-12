// Main.js
import React from 'react';
import '../styles/main.css';
import Specialisations from './Specialisations';
import Chicago from './Chicago';
import Temoignages from './Temoignages';


const Main = () => {


  return (
    <div className="main">
      <Specialisations/>
      <Temoignages/>
      <Chicago/>
    </div>
  );
};

export default Main;