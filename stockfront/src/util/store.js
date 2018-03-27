import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { handleRequest } from './util/apiConnection'


const reducer = combineReducers({
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk, handleRequest)
  )
)

export default store