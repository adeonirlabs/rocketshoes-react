export const addToCart = (id) => ({
  type: 'Cart/ADD',
  id,
})

export const addToCartSuccess = (product) => ({
  type: 'Cart/ADD_SUCCESS',
  product,
})

export const removeFromCart = (id) => ({
  type: 'Cart/REMOVE',
  id,
})

export const updateAmount = (id, amount) => ({
  type: 'Cart/UPDATE_AMOUNT',
  id,
  amount,
})

export const updateAmountSuccess = (id, amount) => ({
  type: 'Cart/UPDATE_AMOUNT_SUCCESS',
  id,
  amount,
})
