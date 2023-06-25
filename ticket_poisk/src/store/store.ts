import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "@/store/features/cart";
import { movieApi } from "@/store/services/movieApi";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [movieApi.reducerPath]: movieApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([movieApi.middleware]),
});
