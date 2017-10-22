import React from 'react'
import Reservation from './Reservation'

const ReservationsList = (props) => {
  const reservations = props.reservations.map((reservations) => <Reservation key={reservations.id} reservation={reservations} />)
  return(
    <div className="ui list">
      {reservations}
    </div>
  )

}


export default ReservationsList
