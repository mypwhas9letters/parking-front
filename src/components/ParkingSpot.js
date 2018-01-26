import React from 'react'
import { NavLink } from 'react-router-dom'

const ParkingSpot = (props) => {
  const detailLink = `/parkingSpot/${props.spot.id}`
  return (
      <div className="col-sm-12 col-md-6 col-lg-4">
        <div className="card">
        <NavLink to={detailLink}><img className="card-img-top" src={props.spot.photo} alt=""/></NavLink>
        <div className="card-body">
          <h4 className="card-title">{props.spot.title}</h4>
          <small className="text-muted">New York</small>
          <small className="text-muted">Price: ${props.spot.price}</small>
        <div className="card-text">Description: {props.spot.description}</div>
        <div className="card-text">
          Address:<br/>
          {props.spot.address}<br/>
          {props.spot.city}, {props.spot.state} {props.spot.zip}
        </div>
      </div>
      </div>
    </div>
  )
}

export default ParkingSpot
