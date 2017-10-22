function userReducer(state = {currentUser:{}, parkingSpots:[], reservations:[], trips: [], isLoggedIn:false}, action){
    switch (action.type){
      case "LOG_IN":
  			localStorage.setItem('jwt', action.payload.jwt)
        return Object.assign({}, state, {currentUser: action.payload.user,parkingSpots: action.payload.parkingSpots, reservations:action.payload.reservations, trips: action.payload.trips, loggedIn: true})
  		case "LOG_OUT":
  		  localStorage.removeItem('jwt')
  			return {currentUser:{}, loggedIn:false}
  		case "GET_CURRENT_USER":
        return Object.assign({}, state, {currentUser: action.payload.user,parkingSpots: action.payload.parkingSpots, reservations:action.payload.reservations, trips: action.payload.trips, loggedIn: true})
      default:
        return state
    }
  }

export default userReducer
