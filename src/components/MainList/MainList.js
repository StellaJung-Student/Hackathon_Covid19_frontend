import React from 'react';
import './MainList.css';
// import '../DetailMenu/DetailMenu.css';
import CompanyItem from '../CompanyList/CompanyItem/CompanyItem';
import { Link } from 'react-router-dom';

function MainList({ companies }) {
  console.log(companies);
  return (
    <>
      <div className='detail-menu'>
        <Link to='/reserve'>Popular</Link>
        <div>|</div>
        <Link to='/service'>Recommended</Link>
        <div>|</div>
        <Link to='/evaluation'>Close to me</Link>
      </div>
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
    </>
  );
}

export default MainList;
