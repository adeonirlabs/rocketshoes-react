import {
  CART_ADD,
  CART_ADD_SUCCESS,
  CART_REMOVE,
  CART_UPDATE_AMOUNT,
  CART_UPDATE_AMOUNT_SUCCESS,
} from './constants'

export const addToCart = (id) => ({
  type: CART_ADD,
  id,
})

export const addToCartSuccess = (product) => ({
  type: CART_ADD_SUCCESS,
  product,
})

export const removeFromCart = (id) => ({
  type: CART_REMOVE,
  id,
})

export const updateAmount = (id, amount) => ({
  type: CART_UPDATE_AMOUNT,
  id,
  amount,
})

export const updateAmountSuccess = (id, amount) => ({
  type: CART_UPDATE_AMOUNT_SUCCESS,
  id,
  amount,
})
