import React, { Component } from 'react';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Login from './components/Login'
import Signup from './components/Signup'
import UsersDashboard from './components/UsersDashboard'
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
    const authUsersDashboard = Authorize(UsersDashboard)
    return (
      <div>
        <div className="bodymargin">
          <NavBar />
          <Switch>
            <Route exact path='/home' component={ParkingSpotsContainer} />
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/usersDashboard" component={authUsersDashboard}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/confirmation" component={Confirmation}/>
            <Route exact path='/parkingSpot/:id' component={ParkingSpotDetail} />
            <Route component={ErrorPage}/>
          </Switch>
        </div>
        <Footer />
      </div>
    )
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
