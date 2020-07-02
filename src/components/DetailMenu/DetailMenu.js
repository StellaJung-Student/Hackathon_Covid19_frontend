import React from 'react';
import './DetailMenu.css';
import { Link } from 'react-router-dom';

const DetailMenu = ({ title }) => {
  return (
    <div className='detail-header'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
      >
        <path d='M3 12l18-12v24z' />
      </svg>
      <h1 className='detail-header__title'>{title}</h1>
      <div className='detail-menu'>
        <Link to='/reserve'>Reserve</Link>
        <div>|</div>
        <Link to='/service'>Service</Link>
        <div>|</div>
        <Link to='/evaluation'>Evaluation</Link>
        <div>|</div>
        <Link to='/detail'>Details</Link>
      </div>
    </div>
  );
};

export default DetailMenu;
