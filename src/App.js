
import './App.css';
import Home from './screens/Home';
import{
  BrowserRouter as Router,
  Routes,//Switch,
  Route,
  //Link
}from "react-router-dom";
import Login from './screens/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Adminlogin from './screens/Adminlogin.js';
import Adminloginform from './screens/Adminloginform.js';
import Homepage from './screens/Homepage.js';
import NotificationPage from './screens/NotificationPage.js';
import Company from './screens/Company.js';
import TandSD from './screens/TandSD.js';
import AlumniSupport from './screens/AlumniSupport.js';
import DSA from './screens/DSA.js';
import OC from './screens/OC.js';
import DBMS from './screens/DBMS.js';
import Dev from './screens/Dev.js';
import Microsoft from './screens/Microsoft.js';
import JPMC from './screens/JPMC.js';
import Amazon from './screens/Amazon.js';
import ServiceNow from './screens/ServiceNow.js';
import SalesForce from './screens/SalesForce.js';
import Deloitte from './screens/Deloitte.js';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/Adminlogin' element={<Adminlogin/>}/>
          <Route exact path='/Adminloginf' element={<Adminloginform/>}/>
          <Route exact path='/Afterlogin' element={<Homepage/>}/>
          <Route exact path='/notificationPage' element={<NotificationPage/>}/>
          <Route exact path='/company' element={<Company/>}/>
          <Route exact path='/tandSD' element={<TandSD/>}/>
          <Route exact path='/alumniSupport' element={<AlumniSupport/>}/>
          <Route exact path='/DSA' element={<DSA/>}/>
          <Route exact path='/OC' element={<OC/>}/>
          <Route exact path='/DBMS' element={<DBMS/>}/>
          <Route exact path='/Dev' element={<Dev/>}/>
          <Route exact path='/Microsoft' element={<Microsoft/>}/>
          <Route exact path='/JPMC' element={<JPMC/>}/>
          <Route exact path='/Amazon' element={<Amazon/>}/>
          <Route exact path='/ServiceNow' element={<ServiceNow/>}/>
          <Route exact path='/SalesForce' element={<SalesForce/>}/>
          <Route exact path='/Deloitte' element={<Deloitte/>}/>
        </Routes>
      </div>
    </Router>    
  );
}

export default App;
