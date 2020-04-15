import produce from 'immer'
import { PRODUCTS_STORE_PRODUCTS, PRODUCTS_SET_STATUS } from './constants'

export default function products(state = null, action) {
  switch (action.type) {
    case PRODUCTS_STORE_PRODUCTS:
      return action.products

    case PRODUCTS_SET_STATUS: {
      return produce(state, (draft) => {
        const index = draft.findIndex((prod) => prod.id === action.id)

        if (index >= 0) {
          draft[index].loading = Number(action.status)
        }
      })
    }

    default:
      return state
  }
}
