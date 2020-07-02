import React, { useEffect, useState } from 'react';
import ReservationSearch from '../components/ReservationSearch/ReservationSearch';
import MyFavorite from '../components/MyFavorite/MyFavorite';
import MainList from '../components/MainList/MainList';
import { useDispatch } from 'react-redux';
import { getCompanies } from '../actions/company_actions';

function Reservation() {
  const dispatch = useDispatch();
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    dispatch(getCompanies())
      .then((res) => {
        setCompanies(res.payload.data);
      })
      .catch((err) => console.log(err));
  }, [dispatch]);
  return (
    <>
      <ReservationSearch title={'Reservation'} />
      <MyFavorite title={'My Favourite'} />
      <MainList companies={companies} />
    </>
  );
}

export default Reservation;
