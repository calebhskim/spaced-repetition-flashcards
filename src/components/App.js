import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './Home';
import Edit from './Edit';
import Quiz from './Quiz';
import Results from './Results';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router basename='/'>
        <div className='app-content'>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/quiz">
              <Quiz />
            </Route>
            <Route path="/edit">
              <Edit />
            </Route>
            <Route exact path="/results">
              <Results />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
