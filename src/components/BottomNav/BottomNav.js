import React from 'react';
import './BottomNav.css';
import { Link } from 'react-router-dom';

const BottomNav = () => {
  return (
    <nav className='bottom-screen'>
      <ul className='nav__list'>
        <li className='nav__btn'>
          <Link className='nav__link' to='/'>
            <i className='fas fa-home fa-2x' />
          </Link>
          <div>Home</div>
        </li>
        <li className='nav__btn'>
          <Link className='nav__link' to='/reservation'>
            <span className='nav__notification'></span>
            <i className='fas fa-calendar-day fa-2x' />
          </Link>
          <div>Reservation</div>
        </li>
        <li className='nav__btn'>
          <Link className='nav__link' to='/order'>
            <i className='fas fa-file fa-2x' />
          </Link>
          <div>Order</div>
        </li>
        <li className='nav__btn'>
          <Link className='nav__link' to='/account'>
            <i className='fas fa-user fa-2x' />
          </Link>
          <div>Account</div>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNav;
