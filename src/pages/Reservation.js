import React from 'react';
import ReservationSearch from '../components/ReservationSearch/ReservationSearch';
import MyFavorite from '../components/MyFavorite/MyFavorite';
import MainList from '../components/MainList/MainList';

function Reservation() {
  return (
    <>
      <ReservationSearch title={'Reservation'} />
      <MyFavorite title={'My Favourite'} />
      <MainList />
    </>
  );
}

export default Reservation;
