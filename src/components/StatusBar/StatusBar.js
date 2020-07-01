import React from 'react';
import './StatusBar.css';
const StatusBar = () => {
  return (
    <div className='status-bar'>
      <div className='status-bar__column'>
        <span>No Service</span>
        <i className='fas fa-wifi' />
      </div>
      <div className='status-bar__column'>
        <span>18:43</span>
      </div>
      <div className='status-bar__column'>
        <span>100%</span>
        <i className='fas fa-battery-full fa-lg' />
        <i className='fas fa-bolt' />
      </div>
    </div>
  );
};

export default StatusBar;
