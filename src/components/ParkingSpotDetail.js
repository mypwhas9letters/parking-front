import React from 'react'
import { connect } from 'react-redux'
import { getParkingSpot } from '../actions/parkingSpots'
import MyMapComponent from './MyMapComponent'


class ParkingSpotDetail extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      review: ""
    }
  }

  onChange = (event) => {
    console.log(this.state);
    this.setState({[event.target.name]: event.target.value})
  }

  componentDidMount(){
    const parkingSpotId = this.props.location.pathname.split("/")[2]
    this.props.getParkingSpot(parkingSpotId)
  }

  render(){
    const showSpot = this.props.parkingSpot
    const r = this.props.parkingSpot.reviews[0]
    console.log(r);

    return(
      <div className="ui segment container">
        <div className="ui header">{showSpot.detail.title}</div>
        <img className="ui huge image" src={showSpot.detail.photo} alt=""/>
        <div>
          <MyMapComponent />
        </div>
          <div className="ui message">
            <div className="header">
              Reviews
            </div>
            <ul className="list">

            </ul>
          </div>
          <form class="ui reply form">
            <div class="field">
              <textarea type="text" name="review" onChange={this.onChange} value={this.state.city}></textarea>
            </div>
            <div class="ui blue labeled submit icon button">
              <i class="icon edit"></i> Add Review
            </div>
          </form>
      </div>
    )
  }

}

function mapStateToProps(state){
  return{
    parkingSpot: state.parkingSpots
  }
}

function mapDispatchToProps(dispatch){
  return {
    getParkingSpot: (id) => {
      dispatch(getParkingSpot(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ParkingSpotDetail)
