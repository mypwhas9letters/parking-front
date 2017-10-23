import React from 'react';

class LandingPage extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      address: "",
    }
  }

  onChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  onClick = (event) => {
    event.preventDefault()
    console.log(this.state.address);
  }


  render() {
    return (
        <div className="landing-image">
          <div className="ui container">
            <h1>Search for nearby parking spaces</h1>
            <div className="ui icon input">
              <input type="text" name="address" placeholder="Address" onChange={this.onChange} value={this.state.title}/>
              <button className="ui primary button" onClick={this.onClick}>Search</button>
            </div>
          </div>
        </div>
      )
    }
}

export default LandingPage
