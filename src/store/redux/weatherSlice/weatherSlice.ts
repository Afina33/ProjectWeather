import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { WeatherState } from "./types"

const initialState: WeatherState = {
  error: null,
}
export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload
    },
    clearError(state) {
      state.error = null
    },
  },
})

// weatherSlice создает action для каждого reducer
export const weatherSliceAction = weatherSlice.actions

export const weatherSliceSelectors = weatherSlice.selectors