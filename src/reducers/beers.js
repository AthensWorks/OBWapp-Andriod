import {
  FETCH_BEERS_START,
  FETCH_BEERS_END,
  BEERS_FETCHED,
} from '../constants/ActionTypes'

const beers = (state = {
  data: {},
  isLoading: false,
}, action) => {
  switch(action.type) {
    case BEERS_FETCHED:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.payload,
        },
      }
    case FETCH_BEERS_START:
      return { ...state, isLoading: true }
    case FETCH_BEERS_END:
      return { ...state, isLoading: false }
    default:
      return state
  }
}

export default beers
