import { configureStore } from '@reduxjs/toolkit'
import { deckReducer } from './reducers'

export default  configureStore({
  reducer: {
    cardDeck: deckReducer,
  }
})



