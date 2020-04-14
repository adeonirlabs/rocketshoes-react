import produce from 'immer'
import {
  CART_ADD_SUCCESS,
  CART_REMOVE,
  CART_UPDATE_AMOUNT_SUCCESS,
} from './constants'

const cart = (state = [], action) => {
  switch (action.type) {
    case CART_ADD_SUCCESS:
      return produce(state, (draft) => {
        const { product } = action
        draft.push(product)
      })

    case CART_REMOVE:
      return produce(state, (draft) => {
        const index = draft.findIndex((prod) => prod.id === action.id)

        if (index >= 0) {
          draft.splice(index, 1)
        }
      })

    case CART_UPDATE_AMOUNT_SUCCESS: {
      return produce(state, (draft) => {
        const index = draft.findIndex((prod) => prod.id === action.id)

        if (index >= 0) {
          draft[index].amount = Number(action.amount)
        }
      })
    }

    default:
      return state
  }
}

export default cart
