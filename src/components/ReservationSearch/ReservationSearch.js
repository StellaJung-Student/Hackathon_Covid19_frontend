import React from 'react';
import './ReservationSearch.css';

const ReservationSearch = ({ title }) => {
  return (
    <>
      <h1 className='reservation-header__title'>{title}</h1>
      <div className='reservation-header__search'>
        <span>
          <i className='fas fa-search fa-lg' />
        </span>
        <input type='text' />
      </div>
    </>
  );
};

export default ReservationSearch;
