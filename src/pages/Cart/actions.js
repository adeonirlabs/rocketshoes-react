export const addToCart = (product) => ({
  type: 'Cart/ADD',
  product,
})

export const removeFromCart = (id) => ({
  type: 'Cart/REMOVE',
  id,
})
