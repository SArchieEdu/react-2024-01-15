import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { headphoneSlice } from "./entities/headphone";
import { codecSlice } from "./entities/codec";
import { reviewSlice } from "./entities/review";
import { userSlice } from "./entities/user";
import { cartSlice } from "./ui/cart";
import { requestSlice } from "./ui/request";

export const store = configureStore({
  reducer: combineSlices(
    headphoneSlice,
    codecSlice,
    reviewSlice,
    userSlice,
    cartSlice,
    requestSlice
  ),
});

console.log(store.getState());
