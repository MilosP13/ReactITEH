
import React from 'react';
import { render } from '@testing-library/react';
import Navigacioni from '../Navigacioni';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('Navigacioni', () => {
  it('mobilni style za mobilne', () => {
   
    window.innerWidth = 960; 

  
    const { container } = render(<Router>  <Navigacioni/>    </Router>);

   
    const navElement = container.querySelector('.nav-menu');
    expect(navElement).toHaveClass('nav-menu'); 
  });

  it('desktop style za desktop', () => {
    
    window.innerWidth = 1200; 

 
    const { container } = render(<Router>  <Navigacioni/>    </Router>);

 
    const navElement = container.querySelector('.navbar');
    expect(navElement).toHaveClass('navbar'); 
  });
});
