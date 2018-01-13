import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Switch} from 'react-router-dom';

import Authorize from './components/Authorize';
import Confirmation from './components/Confirmation.js';
import ErrorPage from './components/ErrorPage';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import Login from './components/forms/Login';
import NavBar from './components/NavBar';
import ParkingSpotDetail from './components/ParkingSpotDetail';
import Home from './components/Home';
import Signup from './components/forms/Signup';
import UsersDashboard from './components/UsersDashboard';
import { getCurrentUser } from './actions/users';

class App extends Component {
  constructor(props){
    super(props)

  const jwtexist = localStorage.getItem('jwt')
  if(jwtexist){
    props.getCurrentUser(jwtexist)
    }
  }

  render() {
    const authUsersDashboard = Authorize(UsersDashboard)
    return (
      <div>
        <div className="bodymargin">
          <NavBar />
          <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/confirmation" component={Confirmation}/>
            <Route exact path='/home' component={Home} />
            <Route exact path="/login" component={Login}/>
            <Route exact path='/parkingSpot/:id' component={ParkingSpotDetail} />
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/usersDashboard" component={authUsersDashboard}/>
            <Route component={ErrorPage}/>
          </Switch>
          <Footer />
        </div>
      </div>
    )
  }
}

export default withRouter(connect(null, { getCurrentUser })(App))
