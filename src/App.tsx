import React from 'react';
import Dashboard from './pages/new Pages/dashboard';
import Directory from './pages/new Pages/directory';
import WatchList from './pages/new Pages/watchlist';
import Smartwatch from './pages/new Pages/smart/smart';

/* 
Smartwatch
*/
import SmartwatchInvestor from './pages/new Pages/smart/byinvestor';
import SmartwatchParameter from './pages/new Pages/smart/byparameter';
import SmartwatchInsight from './pages/new Pages/smart/byinsights';
import SmartwatchFeedback from './pages/new Pages/smart/feedback';

/*
timeline
*/
import IoTimeLine from './pages/new Pages/io/timeline';
import IoProfile from './pages/new Pages/io/profile';
import IoKnowledge from './pages/new Pages/io/knowledge';
import IoInvestor from './pages/new Pages/io/smartWatch/byinvestor';
import IoParameter from './pages/new Pages/io/smartWatch/byparameter';
import IoInsight from './pages/new Pages/io/smartWatch/byinsights';
import IoFeedback from './pages/new Pages/io/smartWatch/feedback';

import Footer from './components/footer';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Dashboard />
          </Route>
          <Route exact path='/directory'>
            <Directory />
          </Route>
          <Route exact path='/watchList'>
            <WatchList />
          </Route>
          <Route exact path='/smartwatch'>
            <Smartwatch />
          </Route>
          <Route exact path='/smartwatch/investor'>
            <SmartwatchInvestor />
          </Route>
          <Route exact path='/smartwatch/parameter'>
            <SmartwatchParameter />
          </Route>
          <Route exact path='/smartwatch/insight'>
            <SmartwatchInsight />
          </Route>
          <Route exact path='/smartwatch/feedback'>
            <SmartwatchFeedback />
          </Route>
          <Route exact path='/smartwatch/parameter'>
            <SmartwatchParameter />
          </Route>
          <Route exact path='/io/timeline'>
            <IoTimeLine />
          </Route>
          <Route exact path='/io/profile'>
            <IoProfile />
          </Route>
          <Route exact path='/io/knowledge'>
            <IoKnowledge />
          </Route>
          <Route exact path='/io/investor'>
            <IoInvestor />
          </Route>
          <Route exact path='/io/insight'>
            <IoInsight />
          </Route>
          <Route exact path='/io/feedback'>
            <IoFeedback />
          </Route>
          <Route exact path='/io/parameter'>
            <IoParameter />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
