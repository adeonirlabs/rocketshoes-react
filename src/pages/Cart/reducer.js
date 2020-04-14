import produce from 'immer'

const cart = (state = [], action) => {
  switch (action.type) {
    case 'Cart/ADD_SUCCESS':
      return produce(state, (draft) => {
        const { product } = action
        draft.push(product)
      })

    case 'Cart/REMOVE':
      return produce(state, (draft) => {
        const index = draft.findIndex((prod) => prod.id === action.id)

        if (index >= 0) {
          draft.splice(index, 1)
        }
      })

    case 'Cart/UPDATE_AMOUNT_SUCCESS': {
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
