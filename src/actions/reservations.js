function fetchingReservations() {
  return {
    type: "FETCHING_RESERVATIONS"
  }
}

function fetchedReservations(reservations) {
  debugger
  return {
    type: "FETCHED_RESERVATIONS",
    payload: reservations
  }
}

// function addNewListing(newListing){
//   return {
//     type: "ADD_NEW_LISTING",
//     payload: newListing
//   }
// }

export function fetchReservations(userID){
  const body = JSON.stringify(userID)
  return function(dispatch){
    dispatch(fetchingReservations())
    fetch("http://localhost:3000/api/v1/reservations",{
      method: 'post',
      body: body,
      headers: {
        "Content-Type":"application/json"
      }
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchedReservations(json))
      })
    }
  }





export function postNewListing(reservationParams) {
  const body = JSON.stringify(reservationParams)
  return function(dispatch){
    fetch("http://localhost:3000/api/v1/newreservation", {
      method: 'post',
      body: body,
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
        }
    })
    .then((res) => res.json())
    }
  }

//
// export function getParkingSpot(id){
//   return function(dispatch){
//     fetch(`http://localhost:3000/api/v1/parking_spots/${id}`)
//     .then(res => res.json())
//     .then(json => {
//         dispatch({type: "GET_PARKING_SPOT", payload: json})
//     })
//   }
// }
