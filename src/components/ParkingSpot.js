import React from 'react';
import { NavLink } from 'react-router-dom';
import ReactStars from 'react-stars';

const ParkingSpot = (props) => {
  const detailLink = `/parkingSpot/${props.spot.id}`
  const roundedRating = (Math.round(props.spot.rating*2)/2).toFixed(1)
  let stars = <ReactStars
    count={5}
    value={Number(roundedRating)}
    edit={false}
    half={true}
    size={20}
    color2={'#ffd700'}/>
  return (
      <div className="col-sm-12 col-md-6 col-lg-4">
        <div className="card">
          <NavLink to={detailLink}><img className="card-img-top" src={props.spot.photo} alt=""/></NavLink>
          <div className="card-body">
            <small className="text-muted">City: {props.spot.city}</small>
            <small className="text-muted float-right">Type: {props.spot.type_of_space}</small>
            <h4 className="card-title">{props.spot.title}</h4>
            <div className="card-text">Price: ${props.spot.price} Per Day</div>
            <div className="card-text">Rating: 40 Reviews {stars}</div>
          </div>
      </div>
    </div>
  )
}

export default ParkingSpot;
