import React from 'react';
import DetailMenu from '../components/DetailMenu/DetailMenu';
import Reserve from '../components/Reserve/Reserve';

function ReservationDetail({ params }) {
  return (
    <>
      <DetailMenu title={'Company Name'} />
      <Reserve />
    </>
  );
}

export default ReservationDetail;
