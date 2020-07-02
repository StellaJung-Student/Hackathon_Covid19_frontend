import React from 'react';
import './MyFavorite.css';
import ComapanyItem from '../CompanyList/CompanyItem/CompanyItem';

const MyFavorite = ({ title }) => {
  return (
    <>
      <div className='favourite-header'>
        <h1 className='favourite-header__title'>{title}</h1>
        <ComapanyItem
          name='Company Name'
          description='Good restaurant'
          address='1 Yonge, ON'
          rating='3'
        />
      </div>
    </>
  );
};

export default MyFavorite;
