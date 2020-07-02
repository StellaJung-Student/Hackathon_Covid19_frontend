import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reservation from './pages/Reservation';
import BottomNav from './components/BottomNav/BottomNav';
import ReservationDetail from './pages/ReservationDetail';

function App() {
  return (
    <div className='container'>
      <Switch>
        <Route exact path='/reservation' component={Reservation} />
        <Route exact path='/reservation/:id' component={ReservationDetail} />
        <Route exact path='/' component={Home} />
      </Switch>
      <BottomNav />
    </div>
  );
}

export default App;
