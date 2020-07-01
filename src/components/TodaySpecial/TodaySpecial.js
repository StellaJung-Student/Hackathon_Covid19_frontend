import React from 'react';
import './TodaySpecial.css';

const TodaySpecial = ({ title }) => {
  return (
    <div className='special-header'>
      <h1 className='special-header__title'>{title}</h1>
      <div
        className='today-image'
        style={{
          backgroundImage: `url('https://c.ndtvimg.com/2019-05/ebsmi4t8_indian-curry_625x300_14_May_19.jpg')`,
        }}
      ></div>
    </div>
  );
};

export default TodaySpecial;
