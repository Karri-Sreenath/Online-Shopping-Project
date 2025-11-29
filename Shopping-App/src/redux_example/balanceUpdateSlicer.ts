import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AccountBalanceState {
  balance: number,
  accountId: string
}

const initialState: AccountBalanceState = {
  balance: 1000,
  accountId: ''
}

export const accountBalanceSlice = createSlice({
  name: 'accountbalance',
  initialState,
  reducers: {
    updateBalance: (state, action: PayloadAction<number>) => {
        state.balance +=  action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateBalance } = accountBalanceSlice.actions;

export default accountBalanceSlice.reducer;