import {
  FETCH_ESTABLISHMENTS_START,
  FETCH_ESTABLISHMENTS_END,
  ESTABLISHMENTS_FETCHED,
} from '../constants/ActionTypes'

const establishments = (state = {
  data: {},
  isLoading: false,
}, action) => {
  switch(action.type) {
    case ESTABLISHMENTS_FETCHED:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.payload,
        },
      }
    case FETCH_ESTABLISHMENTS_START:
      return { ...state, isLoading: true }
    case FETCH_ESTABLISHMENTS_END:
      return { ...state, isLoading: false }
    default:
      return state
  }
}

export default establishments
