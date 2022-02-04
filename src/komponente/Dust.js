import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Dust.css';
import { Link } from 'react-router-dom';

function Dust() {
  return (
    <div className='hero-container3'>
      
      <h1>Deserted Sandstorm Planet</h1>
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