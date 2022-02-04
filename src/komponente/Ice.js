import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Ice.css';
import { Link } from 'react-router-dom';

function Ice() {
  return (
    <div className='hero-container4'>
      
      <h1>Cold Icy Mountain Planet</h1>
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