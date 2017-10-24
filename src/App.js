import React, { Component } from 'react';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Login from './components/Login'
import Signup from './components/Signup'
import Profile from './components/UsersProfile'
import AddNew from './components/AddNewListing'
import ParkingSpotsContainer from './components/ParkingSpotsContainer'
import { Route, withRouter, Switch} from 'react-router-dom'
import Authorize from './components/Authorize'
import ErrorPage from './components/ErrorPage'
import ParkingSpotDetail from './components/ParkingSpotDetail'
import LandingPage from './components/LandingPage'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/users'
import Confirmation from './components/Confirmation.js'

class App extends Component {
  constructor(props){
    super(props)

    const jwtexist = localStorage.getItem('jwt')
    if(jwtexist){
      props.getCurrentUser(jwtexist)
    }
  }

  render() {
    const authProfile = Authorize(Profile)
    return (
      <div>
        <NavBar />
          <Switch>
            <Route exact path='/home' component={ParkingSpotsContainer} />
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/profile" component={authProfile}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/addnew" component={AddNew}/>
            <Route exact path="/confirmation" component={Confirmation}/>
            <Route exact path='/parkingSpot/:id' component={ParkingSpotDetail} />
            <Route component={ErrorPage}/>
          </Switch>
        <Footer />
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    getCurrentUser: (jwtexist) => {
      dispatch(getCurrentUser(jwtexist))
    }
  }
}


export default withRouter(connect(null, mapDispatchToProps)(App))
