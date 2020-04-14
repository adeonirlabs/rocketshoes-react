import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdShoppingCart } from 'react-icons/md'

import { addToCart } from 'pages/Cart/actions'

import { api } from 'services'
import { formatPrice } from 'utils'

import { ProductList } from './styles'

const Home = () => {
  const [products, setProducts] = useState([])

  const amount = useSelector((state) =>
    state.cart.reduce((count, product) => {
      count[product.id] = product.amount

      return count
    }, {})
  )

  useEffect(() => {
    api.get('/products').then((response) => {
      const data = response.data.map((product) => ({
        ...product,
        formattedPrice: formatPrice(product.price),
      }))

      setProducts(data)
    })
  }, [])

  const dispatch = useDispatch()

  const handleAddProduct = (id) => {
    dispatch(addToCart(id))
  }

  return (
    <ProductList>
      {products.map((product) => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.formattedPrice}</span>

          <button type="button" onClick={() => handleAddProduct(product.id)}>
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

export default Home
