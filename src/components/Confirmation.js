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
      <div className="container pageMargin">
        <h1 className="boldBlueText">Thank You</h1>
        <h1 className="boldBlueText">Your request has been sent the owner</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <textarea className="form-control" rows="3" placeholder="Feel Free To Send Any Additional Messages"></textarea>
          </div>
          <input className="btn btn-primary blue" type="submit" value="Send Message"/>
        </form>
      </div>
    );
  }
}

export default Confirmation;
