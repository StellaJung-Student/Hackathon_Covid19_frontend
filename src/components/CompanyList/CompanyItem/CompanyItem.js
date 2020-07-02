import React from 'react';
import './CompanyItem.css';
import { Link } from 'react-router-dom';

const ComapanyItem = ({
  name,
  description,
  address,
  rating,
  url = 'https://www.pngfind.com/pngs/m/665-6659827_enterprise-comments-default-company-logo-png-transparent-png.png',
}) => {
  return (
    <li className='company-item-container'>
      <div
        className='company-item-image'
        style={{
          backgroundImage: `url(
          ${url}
        )`,
        }}
      ></div>
      <div className='company-item-info'>
        <Link to={`/reservation/${name}`} className='company-item-title'>
          {name}
        </Link>
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
