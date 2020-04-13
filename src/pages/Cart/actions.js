export const addToCart = (product) => ({
  type: 'Cart/ADD',
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
