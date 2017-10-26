import React from 'react'
import { connect } from 'react-redux'
import ReservationsContainer from './reservations/ReservationsContainer'
import AddNew from './AddNewListing'
import { Redirect } from 'react-router-dom'
import Profile from './Profile'
import YourReservationsContainer from './reservations/YourReservationsContainer'
import { Menu, Segment } from 'semantic-ui-react'
import EditProfile from './EditProfile'



class UsersDashboard extends React.Component {
  constructor(props){
    super(props)
      this.state = {
      tab: <Profile />,
      activeItem: 'Profile'
    }
  }

  onClick = (event, { name }) => {
    this.setState({ activeItem: name })
    switch (name){
      case "AddNew":
        return this.setState({tab: <AddNew />})
      case "Requests":
        return this.setState({tab: <ReservationsContainer />})
      case "Your Reservations":
        return this.setState({tab: <YourReservationsContainer />})
      case "EditProfile":
        return this.setState({tab: <EditProfile />})
      default:
        return this.setState({tab: <Profile/>})
    }
  }

  render(){
    const { activeItem } = this.state

    if (!localStorage.getItem('jwt')){
      return <Redirect to="/login" />
      }
    const tabToRender = (this.state.tab)
    return(

      <div className="ui container">
        <Menu attached='top' tabular  >
          <Menu.Item color={"blue"} name="Profile" active={activeItem === "Profile"} onClick={this.onClick}><p className="textSize">Profile Page</p></Menu.Item>
          <Menu.Item color={"blue"} name="Requests" active={activeItem === "Requests"} onClick={this.onClick}><p className="textSize">Requests</p></Menu.Item>
          <Menu.Item color={"blue"} name="Your Reservations" active={activeItem === "Your Reservations"} onClick={this.onClick}><p className="textSize">Your Reservations</p></Menu.Item>
          <Menu.Item color={"blue"} name="AddNew" active={activeItem === "AddNew"} onClick={this.onClick}><p className="textSize">Add New</p></Menu.Item>
          <Menu.Item color={"blue"} name="EditProfile" active={activeItem === "EditProfile"} onClick={this.onClick}><p className="textSize">Edit Profile</p></Menu.Item>

      </Menu>
        <Segment attached='bottom'>
          {tabToRender}
        </Segment>
      </div>
    )
  }

}


function mapStateToProps(state){
  return{
    currentUser: state.user.currentUser,
    parkingSpots: state.user.parkingSpots,
    reservations: state.reservations,
    trips: state.user.trips

  }
}


export default connect(mapStateToProps)(UsersDashboard)
