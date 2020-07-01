import React, { useState } from 'react';
import './TopNav.css';

const TopNav = () => {
  const [isLoggin, setLoggin] = useState(false);

  return (
    <header className='screen-header'>
      <h1 className='screen-header__title'>Service Solution</h1>
      <div className='screen-header-info'>
        <div className='screen-header-info__top'>
          <div className='user-info'>{isLoggin ? 'Hi, Stella' : 'Guest!'}</div>
          <div className='top-menu'>
            {isLoggin ? (
              <>
                <div className='top-meun__item'>Sign off</div>
              </>
            ) : (
              <>
                <div className='top-meun__item'>Sign in</div>
                <div className='top-meun__item'>|</div>
                <div className='top-meun__item'>Sign up</div>
              </>
            )}
          </div>
        </div>
        <div className='screen-header__search'>
          <span>
            <i className='fas fa-search fa-lg' />
          </span>
          <input type='text' />
        </div>
      </div>
    </header>
  );
};

export default TopNav;
