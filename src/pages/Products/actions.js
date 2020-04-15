import { PRODUCTS_STORE_PRODUCTS, PRODUCTS_SET_STATUS } from './constants'

export function storeProducts(products) {
  return {
    type: PRODUCTS_STORE_PRODUCTS,
    products,
  }
}

export function setProductStatus(id, status) {
  return {
    type: PRODUCTS_SET_STATUS,
    id,
    status,
  }
}
