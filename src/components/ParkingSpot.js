import React from 'react';
import { NavLink } from 'react-router-dom';

const ParkingSpot = (props) => {
  const detailLink = `/parkingSpot/${props.spot.id}`
  const roundedRating = (Math.round(props.spot.rating*2)/2).toFixed(1)
  console.log(roundedRating)
  let stars = <div></div>
  // for(let i = roundedRating; i>0; i--){
  //   if(i === .5){
  //     return <i className="fa fa-star-half fa-lg" aria-hidden="true"></i>
  //   }else{
  //     return <i className="fa fa-star fa-lg" aria-hidden="true"></i>
  //   }
  // }
  // console.log(stars)
  return (
      <div className="col-sm-12 col-md-6 col-lg-4">
        <div className="card">
        <NavLink to={detailLink}><img className="card-img-top" src={props.spot.photo} alt=""/></NavLink>
        <div className="card-body">
        <small className="text-muted">City: {props.spot.city}</small>
        <small className="text-muted float-right">Type: {props.spot.type_of_space}</small>
        <h4 className="card-title">{props.spot.title}</h4>
        <div className="card-text">Price: ${props.spot.price} Per Day</div>
        <div className="card-text">Rating: {roundedRating}/5</div>
        {stars}

      </div>
      </div>
    </div>
  )
}

export default ParkingSpot;
