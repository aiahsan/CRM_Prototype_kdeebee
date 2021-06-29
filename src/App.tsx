import React from 'react';
import logo from './logo.svg';
import Expand from './pages/Dashboard/expand'
import Directory from './pages/M_Opp/Directory'
import TimeLine from './pages/M_Opp/Io/timeline'
import People from './pages/M_contaacts/people'
import AllocateToNew from './pages/M_contaacts/reconcile/item/allocatetonew'
import Profile from './pages/M_contaacts/UserProfile/Profile/profile'
import Footer from './components/footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Expand />
          </Route>
          <Route exact path="/directory">
            <Directory />
          </Route>

          <Route exact path="/timeLine">
            <TimeLine />
          </Route>
          <Route exact path="/people">
            <People />
          </Route>
          <Route exact path="/allocateToNew">
            <AllocateToNew />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>

        </Switch></Router>
      <Footer />

    </>
  );
}

export default App;
