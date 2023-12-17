import React, { useState, useEffect } from 'react';
import './POTD.css'

const PlanetOfTheDay = () => {
  const [apodData, setApodData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApodData = async () => {
      try {
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=vCPn0F95WzAGfZGmbQtBwIsF9Gtvfz3qhZPhDptC`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setApodData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching APOD data:', error);
        setLoading(false);
      }
    };

    fetchApodData();
  }, []);

  return (
    <div className='glavno'>
    <div className='container'>
      <h2>Astronomy Picture of the Day (APOD)</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        apodData && (
          <div>
            <h3>{apodData.title}</h3>
            <p>{apodData.date}</p>
            <img src={apodData.url} alt={apodData.title} style={{ maxWidth: '100%' }} />
            <p>{apodData.explanation}</p>
          </div>
        )
      )}
    </div>
    </div>
  );
};

export default PlanetOfTheDay;
