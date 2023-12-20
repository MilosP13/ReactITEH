import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Blue.css';
import { Link } from 'react-router-dom';

function Blue() {
  return (
    <div className='hero-container2'>
      
      <h1>Frozen Ice Dark Planet</h1>
      <div className='planet-text-div'>
      <h2 className='planet-text'>In the far reaches of the galaxy lies an enigmatic celestial body known only as Cryo-Nyx, a frozen ice dark planet shrouded in perpetual mystery. Its surface is a frigid wasteland of jagged crystalline formations, glistening ice cliffs, and vast frozen plains that stretch as far as the eye can see.
        The atmosphere of Cryo-Nyx is a haunting blend of eerie tranquility and ominous silence. Wisps of ethereal mist swirl in the air, creating an otherworldly aurora that dances across the sky in mesmerizing hues of sapphire, violet, and deep indigo. Amidst this celestial display, the stars glitter like scattered diamonds against the backdrop of an endless obsidian night.</h2>
        
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

export default Blue;