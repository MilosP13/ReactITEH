import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Ice.css';
import { Link } from 'react-router-dom';

function Ice() {
  return (
    <div className='hero-container4'>
      
      <h1>Cold Icy Mountain Planet</h1>
      <div className='planet-text-div'>
      <h2 className='planet-text'>In the vast expanse of the cosmos lies a celestial body known as Glacialis, a planet draped in a majestic and unforgiving landscape of cold, icy mountains that pierce the heavens. Its surface is a frozen tapestry of breathtaking peaks, colossal glaciers, and sweeping valleys blanketed in pristine layers of glistening snow.

The atmosphere of Glacialis is crisp and thin, carrying a biting chill that permeates the air. A perpetual mist hangs in the valleys, drifting among the towering mountains and lending an ethereal quality to the landscape. The sky above is a canvas of deep sapphire, adorned with the occasional dance of shimmering auroras that paint ribbons of color across the polar firmament.</h2>
        
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

export default Ice;