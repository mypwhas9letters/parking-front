import React, { Component } from 'react';

class Confirmation extends Component{
  constructor(props){
    super(props)

    this.state = {
      message: ""
    }
  }

  onChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.history.push("/UsersDashboard")
  }

  render(){
    return (
      <div className="ui container">
        <h1>Thank You. Your request has been sent the owner</h1>
          <form className="ui reply form" onSubmit={this.onSubmit}>
            <div className="field">
              <textarea type="text" name="message" placeholder="Send the owner a message..." onChange={this.onChange} value={this.state.city}/>
            </div>
            <input className="ui fluid large primary submit button" type="submit" value="Send Message"/>
          </form>
      </div>
    )
  }

}

export default Confirmation
