import React from 'react';
import './TopNav.css';

const TopNav = ({ displayLogIn, displaySignUp, isLoggedIn }) => {
  console.log(isLoggedIn);
  return (
    <header className='screen-header'>
      <h1 className='screen-header__title'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='40'
          height='40'
          viewBox='0 0 24 24'
        >
          <path d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.436 11.84c-1.22 2.608-4.167 6.16-6.03 6.16-1.837 0-2.103-3.916-3.106-6.522-.492-1.282-.81-.988-1.734-.34l-.566-.728c1.35-1.186 2.698-2.563 3.529-2.64.933-.09 1.508.548 1.724 1.916.284 1.797.681 4.585 1.374 4.585.539 0 1.871-2.212 1.938-3.003.121-1.159-.852-1.193-1.695-.832 1.336-4.377 6.897-3.571 4.566 1.404z' />
        </svg>
      </h1>
      <div className='screen-header-info'>
        <div className='screen-header-info__top'>
          <div className='user-info'>
            Hi, {isLoggedIn ? localStorage.getItem('name') : 'Guest!'}
          </div>
          <div className='top-menu'>
            {isLoggedIn ? (
              <>
                <div
                  className='top-meun__item'
                  onClick={() => {
                    localStorage.removeItem('token');
                    localStorage.removeItem('name');
                    window.location.href = '/';
                  }}
                >
                  Sign off
                </div>
              </>
            ) : (
              <>
                <div className='top-meun__item' onClick={displayLogIn}>
                  Sign in
                </div>
                <div className='top-meun__item'>|</div>
                <div className='top-meun__item' onClick={displaySignUp}>
                  Sign up
                </div>
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
