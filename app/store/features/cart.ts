import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'

import { item as elem } from '../../types_constant'


const initialState: elem[] = []

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addElement: (state, action: PayloadAction<elem>) => {
      state.push(action.payload)
    },
    removeElement: (state, action: PayloadAction<number>) => {
      state.splice(action.payload, 1)
    },
    clearCart: (state) => {
      return []
    }
  }
})

export const { addElement, removeElement, clearCart } = cartSlice.actions

export const selectCart = (state: RootState) => state.cart

export default cartSlice.reducer
