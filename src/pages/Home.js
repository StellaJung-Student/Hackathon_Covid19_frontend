import React, { useState, useEffect } from 'react';
import TopNav from '../components/TopNav/TopNav';
import Special from '../components/Special/Special';
import CompanyList from '../components/CompanyList/CompanyList';
import BottomNav from '../components/BottomNav/BottomNav';
import Login from '../components/Login/Login';
import SignUp from '../components/SignUp/SignUp';

function Home() {
  const [toggleLogin, setToggleLogin] = useState(false);
  const [toggleSignUp, setToggleSignUp] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const displayLogIn = () => {
    setToggleLogin(!toggleLogin);
  };

  const displaySignUp = () => {
    setToggleSignUp(!toggleSignUp);
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
      <TopNav
        displayLogIn={displayLogIn}
        displaySignUp={displaySignUp}
        isLoggedIn={isLoggedIn}
      />
      <Special title="Today's Special" />
      <CompanyList title='Best recommendation' />
      <BottomNav />
      {toggleLogin && <Login displayLogIn={displayLogIn} />}
      {toggleSignUp && <SignUp displaySignUp={displaySignUp} />}
    </div>
  );
}

export default Home;
