import React from 'react';
import './MainList.css';
// import '../DetailMenu/DetailMenu.css';
import CompanyItem from '../CompanyList/CompanyItem/CompanyItem';
import { Link } from 'react-router-dom';

function MainList() {
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
    </>
  );
}

export default MainList;
