function usersReducer(state = {users:[]}, action){
    switch (action.type){
      case "FETCHED_SPOTS":
        return Object.assign({}, state, {parkingSpots: action.payload, isFetching: false})
      case "FETCHING_SPOTS":
        return Object.assign({}, state, {isFetching: true})
      case "ADD_NEW_LISTING":
        return Object.assign({}, state, {parkingSpots: [...state.parkingSpots, action.payload]})

      default:
        return state
    }
  }

export default usersReducer
