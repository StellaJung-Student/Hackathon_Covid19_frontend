import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Switch>
      <Route exact to='/' component={Home} />
    </Switch>
  );
}

export default App;
