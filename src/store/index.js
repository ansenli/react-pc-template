import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise'
import rootReducer from './reducers'
const { composeWithDevTools } = require('redux-devtools-extension');

export default function configStore () {
  const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(promiseMiddleware)))
  return store
}
