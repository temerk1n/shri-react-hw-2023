import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "@/store/features/cart";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
