import React from 'react';
import DetailMenu from '../components/DetailMenu/DetailMenu';
import Reserve from '../components/Reserve/Reserve';

function ReservationDetail({ match: params }) {
  return (
    <>
      <DetailMenu title={params.params.id} />
      <Reserve />
    </>
  );
}

export default ReservationDetail;
