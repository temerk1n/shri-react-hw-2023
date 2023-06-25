import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface State {
  [key: string]: number;
  amount: number;
}

const initialState: State = {
  amount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, { payload }: PayloadAction<string>) => {
      const count = state[payload] || 0;

      if (count === 30) return;
      if (state.amount === 30) return;

      state.amount += 1;
      state[payload] = count + 1;
    },
    decrement: (state, { payload }) => {
      const count = state[payload] || 0;

      if (!count) {
        return;
      }

      if (state.amount === 0) return;

      state.amount -= 1;

      if (count === 1) {
        delete state[payload];
        return;
      }

      state[payload] = count - 1;
    },
    reset: () => {
      return initialState;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
