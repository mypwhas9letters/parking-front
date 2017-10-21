import React from 'react'
import { NavLink } from 'react-router-dom'

const ParkingSpot = (props) => {
  const detailLink = `/parkingSpot/${props.spot.id}`
  return (

    <div className="item">
      <div className="right floated content">
      </div>
      <div className="ui medium image">
        <NavLink to={detailLink}><img src={props.spot.photo} alt=""/></NavLink>
      </div>
    <div className="content">
        <div className="header">{props.spot.title}</div>
        <div className="description">{props.spot.description}</div>
        <div>
          Address: {props.spot.address}{props.spot.city}{props.spot.state}{props.spot.zip}
        </div>
        <div>Price: ${props.spot.price}</div>
      </div>
    </div>
  )
}

export default ParkingSpot
