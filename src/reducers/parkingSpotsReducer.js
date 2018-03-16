function parkingSpotsReducer(state = {isFetching: false, parkingSpots:[], detail:{}, reviews:null, unavailableDates:null, sortedSpaces:[] }, action){
    switch (action.type){
      case "FETCHED_SPOTS":
        return Object.assign({}, state, {parkingSpots: action.payload, sortedSpaces: action.payload, isFetching: false})
      case "FETCHING_SPOTS":
        return Object.assign({}, state, {isFetching: true})
      case "FILTER_BY":
      var filtered = state.parkingSpots.filter(space => space.type_of_space === action.payload)
      if(action.payload === "all"){
        filtered = state.parkingSpots
      }
        return Object.assign({}, state, {sortedSpaces: [...filtered]})
      case "SORT_BY":
        var sorted = []
        if(action.payload[0] === "price" && action.payload[1] === "asc"){
          sorted = state.sortedSpaces.sort((a,b) => a.price > b.price )
        }else if(action.payload[0] === "price" && action.payload[1] === "desc"){
          sorted = state.sortedSpaces.sort((a,b) => a.price < b.price )
        }else if(action.payload[0] === "rating" && action.payload[1] === "asc"){
          sorted = state.sortedSpaces.sort((a,b) => a.rating > b.rating )
        }else if(action.payload[0] === "rating" && action.payload[1] === "desc"){
          sorted = state.sortedSpaces.sort((a,b) => a.rating < b.rating )
        }
        return Object.assign({}, state, {sortedSpaces: [...sorted]})
      case "ADD_NEW_LISTING":
        return Object.assign({}, state, {parkingSpots: [...state.parkingSpots, action.payload]})
      case "GET_PARKING_SPOT":
        return Object.assign({}, state, {detail: action.payload.parkingSpot, reviews: action.payload.reviews, unavailableDates: action.payload.unavailableDates})
      default:
        return state
    }
  }

export default parkingSpotsReducer;
