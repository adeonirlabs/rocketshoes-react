import { createStore } from 'redux'

import rootReducers from './reducers'

const enhancer =
  process.env.NODE_ENV === 'development' ? console.tron.createEnhancer() : null

const store = createStore(rootReducers, enhancer)

export default store
