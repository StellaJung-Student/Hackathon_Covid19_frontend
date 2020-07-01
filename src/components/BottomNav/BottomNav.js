import React from 'react';
import './BottomNav.css';

const BottomNav = () => {
  return (
    <nav className='bottom-screen'>
      <ul className='nav__list'>
        <li className='nav__btn'>
          <a className='nav__link' href='friends.html'>
            <i className='fas fa-home fa-2x' />
          </a>
          <div>Home</div>
        </li>
        <li className='nav__btn'>
          <a className='nav__link' href='#'>
            <span className='nav__notification'></span>
            <i className='fas fa-calendar-day fa-2x' />
          </a>
          <div>Reservation</div>
        </li>
        <li className='nav__btn'>
          <a className='nav__link' href='#'>
            <i className='fas fa-file fa-2x' />
          </a>
          <div>Order</div>
        </li>
        <li className='nav__btn'>
          <a className='nav__link' href='#'>
            <i className='fas fa-user fa-2x' />
          </a>
          <div>Account</div>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNav;
