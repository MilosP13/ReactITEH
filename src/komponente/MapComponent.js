import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapComponent = () => {
  useEffect(() => {
    const map = L.map('mapid').setView([37.2431, -115.7930], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    const marker = L.marker([37.2431, -115.7930], { title: 'Area 51' }).addTo(map);

    // markeer
    marker.bindPopup("<b>Area 51</b>", { offset: L.point(13, 10) }).openPopup();

    // marker nije centriran sa tekstom
    marker.on('popupopen', () => {
      marker.setIcon(DefaultIcon);
      marker.update();
    });
  }, []);

  return <div id="mapid" style={{ height: '650px', width: '90%' }}></div>;
};

export default MapComponent;

