import { configureStore } from '@reduxjs/toolkit'
import momentReducer from './slices/moments'

export default configureStore({
  reducer: {
    moment: momentReducer
  },
})