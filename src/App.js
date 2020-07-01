import React from 'react';
import TopNav from './components/TopNav/TopNav';
import TodaySpecial from './components/TodaySpecial/TodaySpecial';
import CompanyList from './components/CompanyList/CompanyList';
import BottomNav from './components/BottomNav/BottomNav';

function App() {
  return (
    <div className='container'>
      <TopNav />
      <TodaySpecial title="Today's Special" />
      <CompanyList title='Best recommendation' />
      <BottomNav />
    </div>
  );
}

export default App;
