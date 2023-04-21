import { createSlice } from '@reduxjs/toolkit'

export const cardDeckSlice = createSlice({
  name: 'cardDeck',
  initialState: [ ],
  reducers: {
    addCard: (state, action) => {
      state.push(action.payload)
    }
  }
})
export const { addCard } = cardDeckSlice.actions
export default cardDeckSlice.reducer
