import React from 'react';
import './CompanyList.css';
import CompanyItem from './CompanyItem/CompanyItem';

const CompanyList = ({ title }) => {
  return (
    <div className='company-list-container'>
      <h1 className='company-list__title'>{title}</h1>
      <ul className='company-list'>
        <CompanyItem
          name='Company Name'
          description='Good restaurant'
          address='1 Yonge, ON'
          rating='3'
        />
        <CompanyItem
          name='Company Name'
          description='Good restaurant'
          address='1 Yonge, ON'
          rating='3'
        />
        <CompanyItem
          name='Company Name'
          description='Good restaurant'
          address='1 Yonge, ON'
          rating='3'
        />
      </ul>
    </div>
  );
};

export default CompanyList;
