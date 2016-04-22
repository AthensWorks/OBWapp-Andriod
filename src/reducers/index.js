import { combineReducers } from 'redux'

import establishments from './establishments'
import beers from './beers'

export default combineReducers({
  establishments,
  beers,
})
