import React from 'react';
import './CompanyItem.css';

const ComapanyItem = ({ name, description, address, rating }) => {
  return (
    <li className='company-item-container'>
      <div
        className='company-item-image'
        style={{
          backgroundImage: `url(
          'https://i.pinimg.com/564x/d1/fc/33/d1fc335b21f2682ddf4975eed5f2cff9.jpg'
        )`,
        }}
      ></div>
      <div className='company-item-info'>
        <div className='company-item-title'>{name}</div>
        <div>{description}</div>
        <div className='company-item-bottom'>
          <div>{address}</div>
          <div>Rating {rating} out of 5</div>
        </div>
      </div>
    </li>
  );
};

export default ComapanyItem;
