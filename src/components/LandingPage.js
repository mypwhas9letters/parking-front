import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getFilterByZip } from '../actions/parkingSpots';

class LandingPage extends Component {
  constructor(props){
    super(props);

    this.state = {
      zip: "",
      distance: "",
      history: this.props.history
    }
  }

  onChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.getFilterByZip(this.state);
    this.props.history.push("/home");
  }

  render() {
    return (
      <div className="landing-image">
        <div className="container">
          <div className="text-center"><br/>
            <h1 className="boldBlueText">Search For Available Parking Spaces</h1><br/>
            <form onSubmit={this.onSubmit}>
              <p>Currently only serving the NYC area. <br/> Please use NYC zip codes (ex. 10004, 11217)</p>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <input type="number" name="zip" className="form-control" placeholder="Zip Code" onChange={this.onChange} value={this.state.zip} minLength="5" required/>
                </div>
                <div className="form-group col-md-6">
                  <input type="number" name="distance" className="form-control" placeholder="Distance (mi)" onChange={this.onChange} value={this.state.distance} required/>
                </div>
              </div>
              <button type="submit" className="btn btn-primary btn-lg btn-block blue">Search</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { getFilterByZip })(LandingPage);
