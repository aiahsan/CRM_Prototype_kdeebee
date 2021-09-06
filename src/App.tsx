/* 
Opportunity
*/
import Dashboard from './pages/new Pages/dashboard';
import Directory from './pages/new Pages/directory';
import WatchList from './pages/new Pages/watchlist';
import Smartwatch from './pages/new Pages/smart/smart';

/*watchlist project fluid*/

/* 
Smartwatch
*/
import SmartwatchInvestor from './pages/new Pages/smart/byinvestor';
import SmartwatchParameter from './pages/new Pages/smart/byparameter';
import SmartwatchInsight from './pages/new Pages/smart/byinsights';
import SmartwatchFeedback from './pages/new Pages/smart/feedback';
import SmartwatchInvestorEditor from './pages/new Pages/smart/sendmessage';
import SmartwatchInsightEditor from './pages/new Pages/smart/sendmessageinsghts';
import SmartwatchFeedbackSubmit from './pages/new Pages/smart/submitfeedback';
import SmartwatchCreateSmartMatch from './pages/new Pages/smart/create';
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

/* 
Contacts
*/
import Contacts from './pages/new Pages/M_contact/dashboard';
import Dashboard2 from './pages/new Pages/M_contact/dashboard2';
import ContactsPeople from './pages/new Pages/M_contact/people';
import ContactsOrganiszation from './pages/new Pages/M_contact/organisation';
import ContactsRecoil from './pages/new Pages/M_contact/reconcile';
import RecoilAllocate from './pages/new Pages/reconcile/item/allocatetonew';
import UserProfile from './pages/new Pages/userprofile/profile';
import UserTimline from './pages/new Pages/userprofile/timeline';
import UserPreferences from './pages/new Pages/userprofile/preferences';
import UserProfileCallNote from './pages/new Pages/userprofile/callnote';
import OrganisationProfile from './pages/new Pages/organisations/profile';
import OrganisationPeople from './pages/new Pages/organisations/people';
import OrganisationTimeLine from './pages/new Pages/organisations/timeline';
import Library from './pages/new Pages/research';
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

          <Route exact path='/smartwatch/investor/edit'>
            <SmartwatchInvestorEditor />
          </Route>
          <Route exact path='/smartwatch/insight/edit'>
            <SmartwatchInsightEditor />
          </Route>
          <Route exact path='/smartwatch/feeback/submit'>
            <SmartwatchFeedbackSubmit />
          </Route>
          <Route exact path='/smartwatch/create/smartmatch'>
            <SmartwatchCreateSmartMatch />
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

          {/* Contacts Routes*/}
          <Route exact path='/contacts'>
            <Contacts />
          </Route>
          <Route exact path='/contacts/people'>
            <ContactsPeople />
          </Route>
          <Route exact path='/contacts/organsiation'>
            <ContactsOrganiszation />
          </Route>
          <Route exact path='/contacts/recoil'>
            <ContactsRecoil />
          </Route>
          <Route exact path='/contacts/dashboard2'>
            <Dashboard2 />
          </Route>
          <Route exact path='/contacts/recoil/allocate'>
            <RecoilAllocate />
          </Route>

          {/* contact user profile*/}
          <Route exact path='/contacts/userprofile'>
            <UserProfile />
          </Route>
          <Route exact path='/contacts/usertimeline'>
            <UserTimline />
          </Route>
          <Route exact path='/contacts/userpreferences'>
            <UserPreferences />
          </Route>
          <Route exact path='/contacts/usertimeline/callnote'>
            <UserProfileCallNote />
          </Route>

          {/* contact Organization*/}
          <Route exact path='/contacts/organisation/timeline'>
            <OrganisationTimeLine />
          </Route>
          <Route exact path='/contacts/organisation/people'>
            <OrganisationPeople />
          </Route>
          <Route exact path='/contacts/organisation/profile'>
            <OrganisationProfile />
          </Route>
          <Route exact path='/library'>
            <Library />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
