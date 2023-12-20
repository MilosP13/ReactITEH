

import React from 'react';
import { render } from '@testing-library/react';
import MapComponent from '../MapComponent';
import '@testing-library/jest-dom';




describe('LeafletMapComponent', () => {
  it('renders a Leaflet map', () => {
    const { container } = render(<MapComponent />);

    const mapContainer = container.querySelector('#mapid');
    expect(mapContainer).toBeInTheDocument();
  });
});
