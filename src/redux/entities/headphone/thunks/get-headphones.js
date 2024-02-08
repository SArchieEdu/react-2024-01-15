import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectHeadphoneIds } from "../selectors";

export const getHeadphones = createAsyncThunk(
  "headphone/getHeadphones",
  async () => {
    const response = await fetch("http://localhost:3001/api/products/");

    return response.json();
  },
  { condition: (_, { getState }) => !selectHeadphoneIds(getState())?.length }
);
