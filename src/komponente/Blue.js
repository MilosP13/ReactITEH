import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Blue.css';
import { Link } from 'react-router-dom';

function Blue() {
  return (
    <div className='hero-container2'>
      
      <h1>Frozen Ice Dark Planet</h1>
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