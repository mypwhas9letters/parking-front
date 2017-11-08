import React from 'react'
import { postNewListing } from '../actions/parkingSpots'
import { connect } from 'react-redux'

class AddNew extends React.Component {

  constructor(props){
    super(props)
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
      <div className="ui container">
        <form onSubmit={this.onSubmit} className="ui form">
          <h1 className="ui dividing header">New Listing</h1>
        <div className="field">
          <label>Name Of Your Space</label>
          <div className="ui fluid">
            <input type="text" name="title" placeholder="Title" onChange={this.onChange} value={this.state.title}/>
          </div>
        </div>
        <div className="field">
          <label>Description</label>
          <div className="ui fluid">
            <input type="text" name="description" placeholder="Description" onChange={this.onChange} value={this.state.description}/>
          </div>
        </div>
        <div className="two fields">
          <div className="field">
            <label>Photo URL</label>
            <div className="ui fluid">
              <input type="tel" name="photo" placeholder="Image URL" onChange={this.onChange} value={this.state.photo}/>
            </div>
          </div>
          <div className="field">
            <label>Type</label>
            <select className="ui fluid dropdown" name="type" onChange={this.onChange} value={this.state.type}>
              <option value="">Select A Type</option>
              <option value="driveway">Driveway</option>
              <option value="garage">Garage</option>
            </select>
          </div>
        </div>
        <div className="field">
          <label>Address</label>
          <div className="ui fluid">
            <input type="text" name="address" placeholder="Street Address" onChange={this.onChange} value={this.state.address}/>
          </div>
        </div>
        <div className="three fields">
          <div className="field">
            <div className="ui fluid">
              <input type="text" name="city" placeholder="City" onChange={this.onChange} value={this.state.city}/>
            </div>

          </div>
          <div className="field">
            <select className="ui fluid dropdown" name="state" onChange={this.onChange} value={this.state.state}>
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


          <div className="field">
            <div className="ui fluid">
              <input type="text" name="zip" placeholder="Zip Code" onChange={this.onChange} value={this.state.zip}/>
            </div>
          </div>


        </div>


        <div className="field">
          <label>Price Per Day</label>
          <div className="ui fluid">
            <input type="text" name="price" placeholder="Price" onChange={this.onChange} value={this.state.price}/>
          </div>
        </div>


          <input className="ui fluid large primary submit button" type="submit" value="Add New Listing"/>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state){
  console.log(state);
  return{
    currentUser: state.user.currentUser
  }
}


function mapDispatchToProps(dispatch){
  return {
    postNewListing: (listing) => {
      dispatch(postNewListing(listing))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddNew)
