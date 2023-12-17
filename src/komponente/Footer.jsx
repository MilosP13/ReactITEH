import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Button } from './Button';
import './Footer.css';


const Footer = () => {
  const [countdown, setCountdown] = useState(Math.floor(Math.random() * 10) + 1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (countdown > 0) {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [countdown]);

  const resetCountdown = () => {
    setCountdown(Math.floor(Math.random() * 10000000) + 1);
  };

  return (
    <footer style={footerStyle} className='footer'>
      <div>
        <h2>Time until our world ends: {countdown} seconds</h2>
        
        <div className='dugmad'>
        <Button className='btns' buttonSize='btn--medium' buttonStyle='btn--outline' onClick={resetCountdown}  >
                Reset countdown
        </Button>   

        <Link to='/planets'>
        <Button className='btns' buttonSize='btn--medium' buttonStyle='btn--outline' >
          Migrate to other planets
        </Button>
        </Link>
    </div>
      </div>
    </footer>
  );
};


const footerStyle = {
  backgroundColor: '#211',
  color: 'white',
  textAlign: 'center',
  padding: '0.5rem',
  position: 'fixed',
  bottom: 0,
  width: '100%',
};

export default Footer;

