import { combineReducers } from 'redux'

import cart from 'pages/Cart/reducer'
import products from 'pages/Home/reducer'

const rootReducer = combineReducers({
  cart,
  products,
})

export default rootReducer
