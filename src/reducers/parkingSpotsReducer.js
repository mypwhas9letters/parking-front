function parkingSpotsReducer(state = {isFetching: false, parkingSpots:[], detail:{}, reviews:null, unavailableDates:null }, action){
    switch (action.type){
      case "FETCHED_SPOTS":
        return Object.assign({}, state, {parkingSpots: action.payload, isFetching: false})
      case "FETCHING_SPOTS":
        return Object.assign({}, state, {isFetching: true})
      case "ADD_NEW_LISTING":
        return Object.assign({}, state, {parkingSpots: [...state.parkingSpots, action.payload]})
      case "GET_PARKING_SPOT":
        return Object.assign({}, state, {detail: action.payload.parkingSpot, reviews: action.payload.reviews, unavailableDates: action.payload.unavailableDates})
      default:
        return state
    }
  }

export default parkingSpotsReducer
