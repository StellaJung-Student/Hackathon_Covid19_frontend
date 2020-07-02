import React from 'react';
import Special from '../components/Special/Special';
import CompanyList from '../components/CompanyList/CompanyList';

function Home() {
  return (
    <>
      <Special title="Today's Special" />
      <CompanyList title='Best recommendation' />
    </>
  );
}

export default Home;
