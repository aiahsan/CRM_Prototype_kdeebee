import React from 'react';

import OrganisationPeople from './pages/new Pages/organisations/people';

import Footer from './components/footer';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            <OrganisationPeople />
          </Route>

          {/* 
          <Route exact path='/'>
            <Expand />
          </Route>
     

          <Route exact path='/io/timeLine'>
            <TimeLine />
          </Route>
          <Route exact path='/people'>
            <People />
          </Route>
          <Route exact path='/allocateToNew'>
            <AllocateToNew />
          </Route>
          <Route exact path='/userprofile/profile'>
            <Profile />
          </Route>
          <Route exact path='/watchlist'>
            <Watchlist />
          </Route>
          <Route exact path='/userprofile/timeline'>
            <TimelineUser />
          </Route>
       */}
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
