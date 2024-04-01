import { configureStore } from "@reduxjs/toolkit";
import shoppingBagReducer from "./features/shoppingBag/shoppingBagSlice";
import customMiddleWare from "./middleware/customMiddleware";

export const store = configureStore({
  reducer: {
    shoppingBagReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(customMiddleWare);
  },
});

// Source: https://redux-toolkit.js.org/tutorials/typescript#project-setup
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
