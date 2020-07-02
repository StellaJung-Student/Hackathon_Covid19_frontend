import React, { useState, useEffect } from 'react';
import TopNav from '../components/TopNav/TopNav';
import Special from '../components/Special/Special';
import CompanyList from '../components/CompanyList/CompanyList';
import BottomNav from '../components/BottomNav/BottomNav';
import Login from '../components/Login/Login';

function Home() {
  const [toggleLogin, setToggleLogin] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setToggleLogin(!toggleLogin);
  };

  useEffect(() => {
    console.log(localStorage.getItem('token'));
    if (localStorage.getItem('token')) {
      setLoggedIn(true);
    }
  }, []);

  console.log(isLoggedIn);
  return (
    <div className='container'>
      <TopNav handleLogin={handleLogin} isLoggedIn={isLoggedIn} />
      <Special title="Today's Special" />
      <CompanyList title='Best recommendation' />
      <BottomNav />
      {toggleLogin && <Login handleLogin={handleLogin} />}
    </div>
  );
}

export default Home;
