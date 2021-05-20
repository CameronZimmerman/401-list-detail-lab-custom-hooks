import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import List from '../List/List';
import Detail from '../Detail/Detail';

export default function App() {
  return (
    <Router>
      <Link to="/" >Home</Link>
      <Switch>
        <Route 
          exact path="/" 
          component={List}
        />
        <Route 
          exact path="/:id"
          component={Detail}
         />
          
      </Switch>
    </Router>
  )
}
