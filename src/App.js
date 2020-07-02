import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reservation from './pages/Reservation';

function App() {
  return (
    <Switch>
      <Route exact to='/' component={Home} />
      <Route exact to='/reservation' component={Reservation} />
    </Switch>
  );
}

export default App;
