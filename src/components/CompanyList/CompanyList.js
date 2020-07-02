import React from 'react';
import './CompanyList.css';
import CompanyItem from './CompanyItem/CompanyItem';

const CompanyList = ({ title, companies }) => {
  return (
    <div className='company-list-container'>
      <h1 className='company-list__title'>{title}</h1>
      <ul className='company-list'>
        {companies.map((e) => (
          <CompanyItem
            key={e.name}
            name={e.name}
            description={e.description}
            address={e.address}
            url={e.url}
            rating='3'
          />
        ))}
      </ul>
    </div>
  );
};

export default CompanyList;
