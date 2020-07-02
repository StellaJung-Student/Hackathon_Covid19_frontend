import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reservation from './pages/Reservation';
import TopNav from './components/TopNav/TopNav';
import BottomNav from './components/BottomNav/BottomNav';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

function App() {
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
      <Switch>
        <Route exact path='/reservation' component={Reservation} />
        <Route exact path='/' component={Home} />
      </Switch>
      <BottomNav />
      {toggleLogin && <Login displayLogIn={displayLogIn} />}
      {toggleSignUp && <SignUp displaySignUp={displaySignUp} />}
    </div>
  );
}

export default App;
