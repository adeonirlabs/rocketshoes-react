import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from 'react-loader-spinner'
import { MdShoppingCart } from 'react-icons/md'

import { addToCart } from 'pages/Cart/actions'

import { api } from 'services'
import { formatPrice } from 'utils'
import { storeProducts } from './actions'

import { ProductList } from './styles'

export const Products = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products)

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
        loading: false,
      }))

      dispatch(storeProducts(data))
    })
  }, [dispatch])

  const handleAddProduct = (id) => {
    dispatch(addToCart(id))
  }

  return (
    <ProductList>
      {products === null ? (
        <div />
      ) : (
        products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.formattedPrice}</span>

            <button type="button" onClick={() => handleAddProduct(product.id)}>
              <div>
                {product.loading ? (
                  <Loader type="TailSpin" color="#fff" height={24} width={24} />
                ) : (
                  <>
                    <MdShoppingCart size={16} color="#fff" />
                    <p>{amount[product.id] || 0}</p>
                  </>
                )}
              </div>

              <span>Add to Cart</span>
            </button>
          </li>
        ))
      )}
    </ProductList>
  )
}
