import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { MdRemoveCircle, MdAddCircle, MdDelete } from 'react-icons/md'

import { removeFromCart, updateAmount } from 'pages/Cart/actions'

import { formatPrice } from 'utils'

import { Container, ProductTable, Footer } from './styles'

const Cart = ({ cart, total }) => {
  const dispatch = useDispatch()

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id))
  }

  const handleIncrement = (product) => {
    dispatch(updateAmount(product.id, product.amount + 1))
  }
  const handleDecrement = (product) => {
    dispatch(updateAmount(product.id, product.amount - 1))
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Subtotal</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr>
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
                <strong>{product.subTotal}</strong>
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
        <button type="button">Finalizar pedido</button>

        <div>
          <span>Total</span>
          <strong>{total}</strong>
        </div>
      </Footer>
    </Container>
  )
}

const mapStateToProps = (state) => ({
  cart: state.cart.map((product) => ({
    ...product,
    subTotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount
    }, 0)
  ),
})

export default connect(mapStateToProps)(Cart)
