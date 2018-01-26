import React, { Component } from 'react';
import { connect } from 'react-redux';

import { postNewListing } from '../../actions/parkingSpots';

class AddNew extends Component {
  constructor(props){
    super(props);

    this.state = {
      title: "",
      address: "",
      city: "",
      country: "",
      state: "",
      zip: "",
      description: "",
      photo: "",
      price: "",
      type: "",
      owner_id: this.props.currentUser.id,
    }
  }

  onChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  onSubmit = (event) => {
    event.preventDefault()
    const listing = this.state
    this.props.postNewListing(listing)
    window.location.href = ("/UsersDashboard")
  }

  render() {
    return(
      <div className="container pageMargin card">
        <h1 className="boldBlueText text-center">New Listing</h1>
        <form onSubmit={this.onSubmit} className="card-body">
          <div className="form-group">
            <label>Name Of Your Space</label>
            <input type="text" className="form-control" name="title" placeholder="Title" onChange={this.onChange} value={this.state.title} required/>
          </div>
          <div className="form-group">
            <label>Description</label>
            <input type="text" className="form-control" name="description" placeholder="Description" onChange={this.onChange} value={this.state.description} required/>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Photo URL</label>
              <input type="text" className="form-control" name="photo" placeholder="Image URL" onChange={this.onChange} value={this.state.photo} required/>
            </div>
            <div className="form-group col-md-6">
              <label>Type</label>
              <select className="form-control" name="type" onChange={this.onChange} value={this.state.type}>
                <option value="">Select A Type</option>
                <option value="driveway">Driveway</option>
                <option value="garage">Garage</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label>Address</label>
            <input type="text" className="form-control" name="address" placeholder="Street Address" onChange={this.onChange} value={this.state.address} required/>
          </div>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label>City</label>
              <input type="text" className="form-control" name="city" placeholder="City" onChange={this.onChange} value={this.state.city} required/>
            </div>
            <div className="form-group col-md-4">
              <label>State</label>
              <select className="form-control" name="state" onChange={this.onChange} value={this.state.state}>
                <option value="">Select A State</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label>Zip</label>
              <input type="text" className="form-control" name="zip" placeholder="Zip" onChange={this.onChange} value={this.state.zip} required/>
            </div>
          </div>
          <div className="form-group">
            <label>Price Per Day</label>
            <input type="text" className="form-control" name="price" placeholder="Price" onChange={this.onChange} value={this.state.price} required/>
          </div>
          <button type="submit" className="btn btn-primary blue btn-block" value="Add New Listing">Add New Listing</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps({ user }){
  return{
    currentUser: user.currentUser
  }
}

export default connect(mapStateToProps, { postNewListing })(AddNew);
