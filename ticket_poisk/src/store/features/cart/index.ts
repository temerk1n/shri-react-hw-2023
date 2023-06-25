import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitialState {
  [key: string]: number;
}

const initialState: InitialState = {};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, { payload }: PayloadAction<string>) => {
      const count = state[payload] || 0;
      if (count === 30) return;
      state[payload] = count + 1;
    },
    decrement: (state, { payload }) => {
      const count = state[payload] || 0;

      if (!count) {
        return;
      }

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
