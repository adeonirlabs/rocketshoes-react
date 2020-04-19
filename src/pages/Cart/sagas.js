import {
  all,
  call,
  put,
  select,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects'
import { toast } from 'react-toastify'

import { api } from 'services'
import { formatPrice } from 'utils'
import { setProductStatus } from 'pages/Products/actions'
import { CART_ADD, CART_UPDATE_AMOUNT } from './constants'

import { addToCartSuccess, updateAmountSuccess } from './actions'

function* addToCart({ id }) {
  yield put(setProductStatus(id, true))

  const product = yield select((state) =>
    state.cart.find((prod) => prod.id === id)
  )

  const stock = yield call(api.get, `/stock/${id}`)
  const stockAmount = stock.data.amount
  const currentAmount = product ? product.amount : 0
  const amount = currentAmount + 1

  try {
    if (amount > stockAmount) {
      toast.error('This amount is out of stock!')
      return
    }

    if (product) {
      yield put(updateAmountSuccess(id, amount))
    } else {
      const response = yield call(api.get, `/products/${id}`)

      const data = {
        ...response.data,
        amount: 1,
        formattedPrice: formatPrice(response.data.price),
      }

      yield put(addToCartSuccess(data))
    }
  } finally {
    yield put(setProductStatus(id, false))
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return

  const stock = yield call(api.get, `/stock/${id}`)
  const stockAmount = stock.data.amount

  if (amount > stockAmount) {
    toast.error('This amount is out of stock!')
    return
  }

  yield put(updateAmountSuccess(id, amount))
}

export default all([
  takeEvery(CART_ADD, addToCart),
  takeLatest(CART_UPDATE_AMOUNT, updateAmount),
])
