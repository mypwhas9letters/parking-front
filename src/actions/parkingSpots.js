function fetchingSpots() {
  return {
    type: "FETCHING_SPOTS"
  }
}

function fetchedSpots(parkingSpots) {
  return {
    type: "FETCHED_SPOTS",
    payload: parkingSpots
  }
}



export function fetchParkingSpots(){
  return function(dispatch){
    dispatch(fetchingSpots())
    fetch("http://localhost:3000/api/v1/parking_spots")
      .then((res) => res.json())
      .then((json) => {
        const parkingSpots = json
        dispatch(fetchedSpots(parkingSpots))
      })
    }
  }
