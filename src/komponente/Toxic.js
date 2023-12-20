import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Toxic.css';
import { Link } from 'react-router-dom';

function Toxic() {
  return (
    <div className='hero-container5'>
      
      <h1>Deadly Toxic Gass Planet</h1>
      <div className='planet-text-div'>
      <h2 className='planet-text'>Deep in the farthest reaches of the cosmos lies a planet shrouded in ominous veils of deadly toxic gases—an inhospitable world known ominously as Venomir. This malevolent sphere is engulfed in an atmosphere thick with noxious fumes, casting an eerie greenish hue across its desolate surface.

Venomir's sky is an eerie amalgamation of swirling toxic clouds that writhe and churn in an unending tempest, perpetually releasing poisonous vapors that blanket the planet in a lethal embrace. The atmosphere itself seems to pulse with malevolent energy, emitting an ominous glow that casts an unsettling light upon the barren and treacherous terrain below.</h2>
        
         </div>
      
      <p>Explore more!</p>
      <div className='hero-btns'>
      <Link to='/planets'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          EXPLORE
        </Button>
        </Link>
      </div>
    </div>
  );
}

export default Toxic;