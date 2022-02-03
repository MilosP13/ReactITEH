import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Main.css';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div className='hero-container'>
      
      <h1>WELCOME PLANET LOVER</h1>
      <p>Explore planets with us!</p>
      <div className='hero-btns'>
      <Link to='/sign-up'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          SUBSCRIBE
        </Button>
        </Link>
        <Link to='/planets'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          EXPLORE
        </Button>
        </Link>
      </div>
    </div>
  );
}

export default Main;