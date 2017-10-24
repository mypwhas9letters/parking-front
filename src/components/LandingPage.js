import React from 'react';
import { getFilterByZip } from '../actions/parkingSpots'
import { connect } from 'react-redux'


class LandingPage extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      zip: "",
      distance: ""
    }
  }

  onChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  onClick = (event) => {
    event.preventDefault()
    this.props.getFilterByZip(this.state)
    this.props.history.push('/home')

  }


  render() {
    return (
        <div className="landing-image">
          <div className="ui container">
            <h1>Search for nearby parking spaces</h1>
            <div className="ui icon input">
              <input type="text" name="zip" placeholder="Zip Code" onChange={this.onChange} value={this.state.zip} maxlength="5"/>
              <input type="text" name="distance" placeholder="Distance(mi)" onChange={this.onChange} value={this.state.distance}/>

              <button className="ui primary button" onClick={this.onClick}>Search</button>
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
