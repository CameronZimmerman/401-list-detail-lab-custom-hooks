import React from 'react';
import Home from '../Home/Home'
import DetailPage from '../DetailPage/DetailPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route 
          exact path="/:id"
          render={(props) => (
            <DetailPage {...props} />
          )}
         />
          
      </Switch>
    </Router>
  )
}
