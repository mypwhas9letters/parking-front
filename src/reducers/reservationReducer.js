function reservationsReducer(state = {reservations:null, isFetching: false}, action){
    switch (action.type){
      case "FETCHED_RESERVATIONS":
        return Object.assign({}, state, {reservations: action.payload, isFetching: false})
      case "FETCHING_RESERVATIONS":
        return Object.assign({}, state, {isFetching: true})
      default:
        return state
    }
  }

export default reservationsReducer
