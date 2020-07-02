import React, { useState, useEffect } from 'react';
import Special from '../components/Special/Special';
import CompanyList from '../components/CompanyList/CompanyList';
import Login from '../components/Login/Login';
import SignUp from '../components/SignUp/SignUp';
import TopNav from '../components/TopNav/TopNav';
import { useDispatch } from 'react-redux';
import { getCompanies } from '../actions/company_actions';

function Home() {
  const [toggleLogin, setToggleLogin] = useState(false);
  const [toggleSignUp, setToggleSignUp] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const dispatch = useDispatch();
  const [companies, setCompanies] = useState([]);

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
    dispatch(getCompanies())
      .then((res) => {
        setCompanies(res.payload.data);
      })
      .catch((err) => console.log(err));
  }, [dispatch]);
  return (
    <>
      <TopNav
        displayLogIn={displayLogIn}
        displaySignUp={displaySignUp}
        isLoggedIn={isLoggedIn}
      />
      <Special title="Today's Special" />
      <CompanyList title='Best recommendation' companies={companies} />
      {toggleLogin && <Login displayLogIn={displayLogIn} />}
      {toggleSignUp && <SignUp displaySignUp={displaySignUp} />}
    </>
  );
}

export default Home;
