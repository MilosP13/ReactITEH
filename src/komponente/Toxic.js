import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Toxic.css';
import { Link } from 'react-router-dom';

function Toxic() {
  return (
    <div className='hero-container5'>
      
      <h1>Deadly Toxic Gass Planet</h1>
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