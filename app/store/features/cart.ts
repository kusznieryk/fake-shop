import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'

import { item as elem } from '../../types_constant'


const initialState: elem[] = [{
  id: 4,
  title: "Handmade Fresh Table",
  price: 687,
  description: "Andy shoes are designed to keeping in...",
  images: [
    "https://placeimg.com/640/480/any?r=0.9178516507833767",
    "https://placeimg.com/640/480/any?r=0.9300320592588625",
    "https://placeimg.com/640/480/any?r=0.8807778235430017"
  ]
}]

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
    clear: (state) => {
      state = []
    }
  }
})

export const { addElement, removeElement, clear } = cartSlice.actions

export const selectCart = (state: RootState) => state.cart

export default cartSlice.reducer
