import React, { Component } from 'react';
import { connect } from 'react-redux'

import logo from '../images/logo.png'
import { getFilterByZip } from '../actions/parkingSpots'

class LandingPage extends Component {
  constructor(props){
    super(props)

    this.state = {
      zip: "10004",
      distance: "10",
      history: this.props.history
    }
  }

  onChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  onClick = (event) => {
    event.preventDefault()
    this.props.getFilterByZip(this.state)
    this.props.history.push("/home")
  }


  render() {
    return (
        <div className="landing-image">
          <div className="ui container">
          <div className="ui middle aligned center aligned grid">
          <div className="column">
            <h1 className="ui center aligned icon header">
              <i><img className="ui avatar image" src={logo} alt=""/></i>

            <div className="content">Search For Nearby Parking Spaces</div>

            </h1>


              <form className="ui large form">
                <div className="ui stacked segment">

                <div className="two fields">
                  <div className="field">
                    <input type="text" name="zip" placeholder="Zip Code" onChange={this.onChange} value={this.state.zip} maxLength="5" required/>
                  </div>
                  <div className="field">
                    <input type="text" name="distance" placeholder="Distance (mi)" onChange={this.onChange} value={this.state.distance} required/>
                  </div>
                  </div>
                  <label>Currently only serving the NYC area. Please use NYC zip codes (ex. 10004, 11217)</label>

                  <input className="ui fluid large primary button" type="submit" onClick={this.onClick} value="Search"/>

                </div>
              </form>

            </div>
            </div>
          </div>
        </div>
      )
    }
}

export default connect(null, { getFilterByZip })(LandingPage)
