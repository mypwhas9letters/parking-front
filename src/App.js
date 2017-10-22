import React, { Component } from 'react';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Login from './components/Login'
import Signup from './components/Signup'
import Profile from './components/UsersProfile'
import AddNew from './components/AddNewListing'
import ParkingSpotsContainer from './components/ParkingSpotsContainer'
import { Route, withRouter} from 'react-router-dom'
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

    return (
      <div>
        <NavBar />
          <Route exact path='/home' component={ParkingSpotsContainer} />
          <Route exact path="/" component={LandingPage}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/addnew" component={AddNew}/>
          <Route path="/confirmation" component={Confirmation}/>
          <Route exact path='/parkingSpot/:id' component={ParkingSpotDetail} />
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
