import React from 'react';
import './Cards.css';
import CardFill from './CardFill';

function Cards() {
  return (
    <div className='cards'>
      <h1>Lovely but scary planets ready for you to be explored!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>



          <ul className='cards__items'>
            <CardFill
              src='img/p1.jpg'
              text='Frozen Ice Dark Planet'
              label='Scary'
              path='/blue'
            />
            <CardFill
              src='img/p2.jpg'
              text='Deserted Sandstorm Planet'
              label='Deserted'
              path='/dust'
            />
          </ul>


          
          <ul className='cards__items'>
            <CardFill
              src='img/p3.jpg'
              text='Deadly Toxic Gass Planet'
              label='Toxic'
              path='/toxic'
            />
            <CardFill
              src='img/p4.jpg'
              text='Cold Icy Mountains Planet'
              label='Freezy'
              path='/ice'
            />
            <CardFill
              src='img/p5.jpg'
              text='Sand-Water Mixed Planet'
              label='Crazy'
              path='/mix'
            />
          </ul>



        </div>



      </div>



    </div>

  );
}


export default Cards;