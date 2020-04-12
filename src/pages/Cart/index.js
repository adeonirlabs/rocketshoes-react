import React from 'react'
import { MdRemoveCircle, MdAddCircle, MdDelete } from 'react-icons/md'

import { Container, ProductTable, Footer } from './styles'

const Cart = () => {
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
          <tr>
            <td>
              <img
                src="https://static.netshoes.com.br/produtos/tenis-gonew-haze-masculino/98/C62-2349-198/C62-2349-198_zoom1.jpg?ts=1570451962&ims=326x"
                alt="Tenis"
              />
            </td>
            <td>
              <strong>Tenis muito massa</strong>
              <span>R$ 129,90</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircle size={20} color="#7159c1" />
                </button>
                <input type="number" readOnly value={1} />
                <button type="button">
                  <MdAddCircle size={20} color="#7159c1" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$ 129,90</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>
      <Footer>
        <button type="button">Finalizar pedido</button>

        <div>
          <span>Total</span>
          <strong>R$ 129,90</strong>
        </div>
      </Footer>
    </Container>
  )
}

export default Cart
