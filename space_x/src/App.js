import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import LaunchesPage from './pages/launches';

function App() {
  return (
    <Router>
      <Switch>
        <Route path= '/' component= { Home } exact />
        <Route path= 'launches' component= { LaunchesPage } exact />
      </Switch>
    </Router>
  );
}

export default App;
