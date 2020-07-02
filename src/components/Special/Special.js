import React from 'react';
import './Special.css';

const Special = ({ title }) => {
  return (
    <div className='special-header'>
      <h1 className='special-header__title'>{title}</h1>
      <div
        className='today-image'
        style={{
          backgroundImage: `url(
          'https://i.pinimg.com/564x/d1/fc/33/d1fc335b21f2682ddf4975eed5f2cff9.jpg'
        )`,
        }}
      ></div>
    </div>
  );
};

export default Special;
