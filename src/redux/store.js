import { configureStore } from '@reduxjs/toolkit';
import cart from "./cartSlice";
import destination from "./destinationSlice";

export const store = configureStore({
  reducer: {
    destination,
        cart
  },
})