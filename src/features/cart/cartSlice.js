import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
}

const slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload)
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload)
    },
    increaseQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload)
      if (!item) return
      item.quantity++
      item.totalPrice = item.quantity * item.unitPrice
    },
    decreaseQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload)
      if (!item) return
      item.quantity--
      item.totalPrice = item.quantity * item.unitPrice
    },
    clearCart(state) {
      state.cart = []
    },
  },
})

export const {
  addItem,
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = slice.actions

export function getTotalQuantity(store) {
  return store.cart.cart.reduce((acc, item) => acc + item.quantity, 0)
}

export function getTotalPrice(store) {
  return store.cart.cart.reduce((acc, item) => acc + item.totalPrice, 0)
}

export function getCart(store) {
  return store.cart.cart
}

export function getQuantity(id) {
  return (store) =>
    store.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0
}

export default slice.reducer
