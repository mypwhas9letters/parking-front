function parkingSpotsReducer(state = {isFetching: false, parkingSpots:[]}, action){
    switch (action.type){
      case "FETCHED_SPOTS":
        return Object.assign({}, state, {parkingSpots: action.payload, isFetching: false})
      case "FETCHING_SPOTS":
        return Object.assign({}, state, {isFetching: true})
      default:
        return state
    }
  }

export default parkingSpotsReducer
