function fetchParkingSpots(){
  fetch("http://localhost:3000/api/v1/parking_spots")
  .then((res) => res.json())
  .then((json) => {
    const parkingSpots = json.items
    return {
      type: "FETCHED_PARKINGSPOTS",
      payload: parkingSpots
    }

    })
  })
}
