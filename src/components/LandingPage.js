import React from 'react';
import { getFilterByZip } from '../actions/parkingSpots'
import { connect } from 'react-redux'
import logo from '../images/logo.png'


class LandingPage extends React.Component {

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
                  <label>The database is seeded with spaces located around 10004</label>

                <div className="two fields">
                  <div className="field">
                    <input type="text" name="zip" placeholder="Zip Code" onChange={this.onChange} value={this.state.zip} maxLength="5" required/>
                  </div>
                  <div className="field">
                    <input type="text" name="distance" placeholder="Distance (mi)" onChange={this.onChange} value={this.state.distance} required/>
                  </div>
                  </div>
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

function mapDispatchToProps(dispatch){
  return {
    getFilterByZip: (zip) => {
      dispatch(getFilterByZip(zip))
    }
  }
}
export default connect(null, mapDispatchToProps)(LandingPage)
