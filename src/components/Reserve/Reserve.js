import React from 'react';
import TextField from '@material-ui/core/TextField';

import './Reserve.css';

function Reserve() {
  return (
    <>
      <div className='reserve-container'>
        <div className='reserve-option'>
          <div className='reserve-option-item'>
            <h3>Services</h3>
            <select size='3'>
              <option value='1'>Hair Cut</option>
              <option value='2'>Spa</option>
              <option value='3'>Hair Treatment</option>
              <option value='3'>Hair Perm</option>
              <option value='3'>Hair coloring</option>
              <option value='4'>Etc</option>
            </select>
          </div>
          <div className='reserve-option-item'>
            <h3>Number of People</h3>
            <select size='3'>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
            </select>
          </div>
        </div>
        <div className='reserve-option' style={{ marginTop: '2rem' }}>
          <div className='reserve-option-item'>
            <h3>Date</h3>
            <TextField
              id='date'
              type='date'
              defaultValue='2020-07-03'
              InputLabelProps={{
                shrink: true,
              }}
              style={{
                width: '150px',
                alignSelf: 'center',
              }}
            />
          </div>
          <div className='reserve-option-item'>
            <h3>Time</h3>
            <TextField
              id='time'
              type='time'
              defaultValue='10:30'
              InputLabelProps={{
                shrink: true,
              }}
              style={{
                width: '150px',
                alignSelf: 'center',
              }}
            />
          </div>
        </div>
        <div className='reserve-option' style={{ marginTop: '2rem' }}>
          <div className='reserve-option-item'>
            <h3>Manual Request</h3>
            <textarea></textarea>
          </div>
        </div>
        <div className='reserve-option'>
          <div className='btn-container'>
            <button type='submit'>Reserve</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Reserve;
