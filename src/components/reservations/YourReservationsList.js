import React from 'react'
import YourReservation from './YourReservation'

const YourReservationList = (props) => {
  console.log(props);
  const reservations = props.reservations.map((reservations) => <YourReservation key={reservations.id} reservation={reservations}/>)
  return(
    <div className="ui middle aligned divided large list">
      {reservations}
    </div>
  )

}


export default YourReservationList
