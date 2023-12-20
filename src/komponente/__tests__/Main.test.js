import React from 'react';
import {render, screen, cleanup} from '@testing-library/react';
import Main from '../Main';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';




test('renderuj main komponentu sa tekstom',()=>{
    render(<Router>  <Main/>    </Router>);
    const mainElement = screen.getByTestId('main-1');
    expect(mainElement).toBeInTheDocument();
    expect(mainElement).toHaveTextContent('SUBSCRIBE');
})