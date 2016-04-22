import { createStore, applyMiddleware, compose } from 'redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from '../reducers'

export default createStore(
  reducer,
  {},
  compose(
    applyMiddleware(
      createLogger({
        actionTransformer: (action) => ({
          ...action,
          type: String(action.type),
        })
      }),
      thunk,
    )
  )
)
