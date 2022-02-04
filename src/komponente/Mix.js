import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Mix.css';
import { Link } from 'react-router-dom';

function Mix() {
  return (
    <div className='hero-container6'>
      
      <h1>Sand-Water Mixed Planet</h1>
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