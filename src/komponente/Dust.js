import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Dust.css';
import { Link } from 'react-router-dom';

function Dust() {
  return (
    <div className='hero-container3'>
      
      <h1>Deserted Sandstorm Planet</h1>
      <div className='planet-text-div'>
      <h2 className='planet-text'>Far across the cosmos lies the desolate and mysterious planet of Siroccia, a world cloaked in an eternal sandstorm that engulfs its barren surface. Siroccia is a place of harsh extremes, where towering dunes of golden sand stretch endlessly beneath an unforgiving sky painted in swirling shades of burnt orange and crimson.

The atmosphere of Siroccia is thick with fine particles of sand that dance and whirl in ceaseless tempests, creating an ever-shifting veil that obscures the planet's features. The relentless winds howl with an eerie, haunting melody, carrying with them the whispers of forgotten tales and secrets buried beneath the dunes.</h2>
        
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

export default Dust;