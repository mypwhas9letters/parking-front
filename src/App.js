import React, { Component } from 'react';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Search from './components/Search'
import Login from './components/Login'
import Signup from './components/Signup'
import ParkingSpotsContainer from './components/ParkingSpotsContainer'



class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="ui container">
          <Search />
          <ParkingSpotsContainer />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
