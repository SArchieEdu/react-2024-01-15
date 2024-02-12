import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { headphoneSlice } from "./entities/headphone";
import { codecSlice } from "./entities/codec";
import { reviewSlice } from "./entities/review";
import { userSlice } from "./entities/user";
import { cartSlice } from "./ui/cart";
import { requestSlice } from "./ui/request";
import { api } from "./services/api";

export const store = configureStore({
  reducer: combineSlices(
    headphoneSlice,
    codecSlice,
    reviewSlice,
    userSlice,
    cartSlice,
    requestSlice,
    api
  ),
  // [api.reducerPath]: api.reducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

console.log(store.getState());
