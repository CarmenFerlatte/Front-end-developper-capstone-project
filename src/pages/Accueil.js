import React from 'react';
import Specialisations from '../composants/Specialisations';
import Temoignages from '../composants/Temoignages';
import Chicago from '../composants/Chicago';
import CallToAction from '../composants/CallToAction';


const Accueil = () => {
  return (
    <div>
        <CallToAction/>
        <Specialisations/>
        <Temoignages/>
        <Chicago/>
    </div>
  )
}

export default Accueil
