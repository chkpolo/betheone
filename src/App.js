import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Join from './components/join';
import Game from './components/game';
import Results from './components/result';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
      <div className="App">
      <Switch>
        <Route path="/play">
          <Game />
        </Route>
        <Route path="/results">
          <Results />
        </Route>  
        <Route path="/">
          <Join />
        </Route>
      </Switch>
      </div>
  );
}

export default App;
