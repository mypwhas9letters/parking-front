const baseUrl = "https://parallelp-server.herokuapp.com"
// const testServer = "http://localhost:3000"

function fetchingReservations() {
  return {
    type: "FETCHING_RESERVATIONS"
  }
}

function fetchedReservations(reservations) {
  return {
    type: "FETCHED_RESERVATIONS",
    payload: reservations
  }
}

function addNewListing(newListing){
  return {
    type: "ADD_NEW_LISTING",
    payload: newListing
  }
}
function updateRes(json){
  return {
    type: "UPDATE_RESERVATION",
    payload: json
  }
}

export function fetchReservations(jwt){
  return function(dispatch){
    dispatch(fetchingReservations())
    fetch(`${baseUrl}/api/v1/reservations`,{
      method: 'get',
      headers: {
        "Authorization":`Bearer ${jwt}`,
        "Accept":"application/json"
      }
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchedReservations(json))
      })
    }
  }

  export function fetchTrips(jwt){
    return function(dispatch){
      dispatch(fetchingReservations())
      fetch(`${baseUrl}/api/v1/trips`,{
        method: 'get',
        headers: {
          "Authorization":`Bearer ${jwt}`,
          "Accept":"application/json"
        }
      })
        .then((res) => res.json())
        .then((json) => {
          dispatch({type: "FETCHED_TRIPS", payload: json})
        })
      }
    }

  // export function getCurrentUser(jwt){
  //     return function(dispatch) {
  //       fetch('${baseUrl}/api/v1/users/me',{
  //         method: 'get',
  //         headers: {
  //           "Authorization":`Bearer ${jwt}`,
  //           "Accept":"application/json"
  //         }
  //       })
  //
  //       .then(res => res.json())
  //       .then(json => {
  //           dispatch({type: "GET_CURRENT_USER", payload: json})
  //       })
  //     }
  // }









export function postNewListing(reservationParams) {
  const body = JSON.stringify(reservationParams)
  return function(dispatch){
    fetch(`${baseUrl}/api/v1/newreservation`, {
      method: 'post',
      body: body,
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
        }
    })
    .then((res) => res.json())
    .then(json => {
      dispatch(addNewListing(json))
    })
    }
  }

//
// export function getParkingSpot(id){
//   return function(dispatch){
//     fetch(`${baseUrl}/api/v1/parking_spots/${id}`)
//     .then(res => res.json())
//     .then(json => {
//         dispatch({type: "GET_PARKING_SPOT", payload: json})
//     })
//   }
// }


export function updateReservation(updateParams){
  const body = JSON.stringify(updateParams)
  return function(dispatch){
    fetch(`${baseUrl}/api/v1/reservationupdate`, {
      method: 'PATCH',
      body: body,
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
        }
    })
    .then((res) => res.json())
    .then((json) => {
      dispatch(updateRes(json))
    })
    }
  }
