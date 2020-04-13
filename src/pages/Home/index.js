import React, { useState, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { MdShoppingCart } from 'react-icons/md'

import { addToCart } from 'pages/Cart/actions'

import { api } from 'services'
import { formatPrice } from 'utils'

import { ProductList } from './styles'

const Home = ({ amount }) => {
  const dispatch = useDispatch()
  const [products, setProducts] = useState([])

  useEffect(() => {
    api.get('/products').then((response) => {
      const data = response.data.map((product) => ({
        ...product,
        formattedPrice: formatPrice(product.price),
      }))
      setProducts(data)
    })
  }, [])

  const handleProduct = (product) => {
    dispatch(addToCart(product))
  }

  return (
    <ProductList>
      {products.map((product) => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.formattedPrice}</span>

          <button type="button" onClick={() => handleProduct(product)}>
            <div>
              <MdShoppingCart size={16} color="#fff" />{' '}
              {amount[product.id] || 0}
            </div>

            <span>Adicionar ao carrinho</span>
          </button>
        </li>
      ))}
    </ProductList>
  )
}

const mapStateToProps = (state) => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount

    return amount
  }, {}),
})

export default connect(mapStateToProps)(Home)
