import React, { Component } from 'react';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Login from './components/Login'
import Signup from './components/Signup'
import Profile from './components/UsersProfile'

import AddNew from './components/AddNewListing'

import ParkingSpotsContainer from './components/ParkingSpotsContainer'
import { Route } from 'react-router-dom'



class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
          <Route exact path='/' component={ParkingSpotsContainer} />
          <Route path="/profile" component={Profile}/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/addnew" component={AddNew}/>
        <Footer />
      </div>
    );
  }
}

export default App;
