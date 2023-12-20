import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Mix.css';
import { Link } from 'react-router-dom';

function Mix() {
  return (
    <div className='hero-container6'>
      
      <h1>Sand-Water Mixed Planet</h1>
      <div className='planet-text-div'>
      <h2 className='planet-text'>
Deep within the cosmic expanse lies an enigmatic world named Aquadune, a mesmerizing celestial body where sand and water intertwine in a captivating symphony of elements. Aquadune is a planet of striking contrasts, where vast expanses of shimmering sand merge seamlessly with tranquil, crystalline waterways, creating a surreal and breathtaking landscape.

The atmosphere of Aquadune is suffused with a gentle humidity, carrying the faint scent of salt and the whisper of distant waves. Soft, billowing clouds drift lazily across the sky, casting fleeting shadows on the ever-shifting terrain below. The horizon is a seamless blend of sandy dunes meeting serene, rippling bodies of water, giving the impression of an otherworldly oasis stretching to infinity.</h2>
        
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

export default Mix;