import React from 'react';
import Home from '../Home/Home'
import Detail from '../Detail/Detail'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/:id">
          <Detail />
        </Route>
      </Switch>
    </Router>
  )
}
