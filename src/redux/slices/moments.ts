import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TMoment } from '../../utils/types/types';

type TValues = {
    moment: Array<TMoment>
}

const initialState: TValues = {
    moment: []
}

export const momentSlice = createSlice({
  name: 'moment',
  initialState,
  reducers: {
    setMoments: (state, action: PayloadAction<TMoment>) => {
        state.moment = [action.payload];
    },
  },
})

export const { setMoments } = momentSlice.actions

export default momentSlice.reducer;