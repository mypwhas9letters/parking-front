import React from 'react';
import { NavLink } from 'react-router-dom';
import noImage from '../../images/no-image.jpg';

const YourReservation = (props) => {
  const profileImg = props.reservation.guest.profile_pic ? props.reservation.guest.profile_pic : noImage
  // const statusButtons = props.reservation.status === "pending" ? (<div><button name="approved" value={props.reservation.id} className="ui primary button">Confirm</button><button name="denied" value={props.reservation.id} onClick={props.onclick} className="ui red button">Deny</button></div>) : null
  // const YourReservationStatus = props.reservation.status.charAt(0).toUpperCase() + props.reservation.status.slice(1)
  const currentStep = props.reservation.status
  const detailLink = `/parkingSpot/${props.reservation.parking_spot.id}`

  return (
    <div className="card">
      <div className="content">
        {currentStep !== "denied" ?
          <div className="ui four steps">
            <div className="step">
              <i><img className="ui avatar image" src={profileImg} width="100px" alt=""/></i>
              <div className="content">
                <div className="title"><p className="whiteText">{props.reservation.guest.username}</p></div>
                <NavLink to={detailLink}><div className="description"><p className="whiteText">{props.reservation.parking_spot.title}</p></div></NavLink>
                <div className="description"><p className="whiteText">Date {props.reservation.date}</p></div>
              </div>
            </div>
            <div className={currentStep === "pending" ? "active step": "completed step"}>
              <i className="check circle icon"></i>
              <div className="content">
                <div className="title" style={{color:"white"}}>{currentStep === "pending" ? "Awaiting Confirmation": "Confirmed"}</div>
                <div className="description" style={{color:"white"}}>{currentStep === "pending" ? "Awaiting Confirmation From Host": ""}</div>
              </div>
            </div>
            <div className={currentStep === "approved" ? "active step": "step disabled"}>
              <i className="payment icon"></i>
              <div className="content">
                {currentStep === "approved" ? <div className="title" style={{color:"white"}}>Billing</div> : <div className="title">Billing</div> }
                {currentStep === "approved" ? <div className="description" style={{color:"white"}}>Enter billing information</div> : <div className="description">Enter billing information</div> }
              </div>
            </div>
            <div className="step disabled">
              <i className="info icon"></i>
              <div className="content">
                <div className="title">Completed</div>
                <div className="description">Verify order details</div>
              </div>
            </div>
          </div>
        :
          <div className="ui small steps">
            <div className="step">
              <i><img className="ui avatar image" src={profileImg} width="100px" alt=""/></i>
              <div className="content">
                <div className="title" style={{color:"white"}}>{props.reservation.guest.username}</div>
                <NavLink to={detailLink}><div className="description" style={{color:"white"}}>Requested to book {props.reservation.parking_spot.title}</div></NavLink>
                <div className="description" style={{color:"white"}}>Date {props.reservation.date}</div>
              </div>
            </div>
            <div className="step deniedStep">
              <i className="remove icon"></i>
              <div className="content">
                <div className="title" style={{color:"white"}}>Denied</div>
                <div className="description" style={{color:"white"}}>Sorry, your request was denied</div>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default YourReservation;
