import React, { Component } from 'react';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Search from './components/Search'
import Login from './components/Login'
import Signup from './components/Signup'
import ParkingSpotsContainer from './components/ParkingSpotsContainer'
import { Route } from 'react-router-dom'



class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Search />
          <Route exact path='/' component={ParkingSpotsContainer} />
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Signup}/>
        <Footer />
      </div>
    );
  }
}

export default App;
