import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdRemoveCircle, MdAddCircle, MdDelete } from 'react-icons/md'

import { removeFromCart, updateAmount } from 'pages/Cart/actions'

import { formatPrice } from 'utils'

import { Container, ProductTable, Footer } from './styles'

const Cart = () => {
  const cart = useSelector((state) =>
    state.cart.map((product) => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  )

  const total = useSelector((state) =>
    formatPrice(
      state.cart.reduce((count, product) => {
        return count + product.price * product.amount
      }, 0)
    )
  )

  const dispatch = useDispatch()

  const handleDecrement = (product) => {
    dispatch(updateAmount(product.id, product.amount - 1))
  }

  const handleIncrement = (product) => {
    dispatch(updateAmount(product.id, product.amount + 1))
  }

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id))
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>Product</th>
            <th>Amount</th>
            <th>Subtotal</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.formattedPrice}</span>
              </td>
              <td>
                <div>
                  <button
                    type="button"
                    onClick={() => handleDecrement(product)}
                  >
                    <MdRemoveCircle size={20} color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button
                    type="button"
                    onClick={() => handleIncrement(product)}
                  >
                    <MdAddCircle size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.subtotal}</strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => handleRemoveFromCart(product.id)}
                >
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>
      <Footer>
        <button type="button">Proceed to Checkout</button>

        <div>
          <span>Total</span>
          <strong>{total}</strong>
        </div>
      </Footer>
    </Container>
  )
}

export default Cart
