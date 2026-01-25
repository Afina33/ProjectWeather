import { createAppSlice } from "store/createAppSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { currentWeather } from "Layout/types";

export interface weatherInitialState {
  error?: string;
  currentWeather?: currentWeather; // объект текущей погоды
  weatherData: currentWeather[]; // можно оставить для истории
  city: string;
}

const weatherInitialState: weatherInitialState = {
  error: undefined,
  currentWeather: undefined,
  weatherData: [],
  city: "",
};

export const weatherSlice = createAppSlice({
  name: "WEATHER_CARD",
  initialState: weatherInitialState,
  reducers: {
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },

    // Новый экшен для одной карточки
    setCurrentWeather: (state, action: PayloadAction<currentWeather>) => {
      state.currentWeather = action.payload;
    },

    // Можно оставить для истории
    personCard: (state, action: PayloadAction<currentWeather>) => {
      state.weatherData.push(action.payload);
    },

    deleteCard: (state, action: PayloadAction<string>) => {
      state.weatherData = state.weatherData.filter(
        card => card.id !== action.payload
      );
    },

    deleteCards: () => weatherInitialState,
    deleteError: () => weatherInitialState,
  },

  selectors: {
    currentWeather: (state: weatherInitialState) => state.currentWeather,
    person: (state: weatherInitialState) => state.weatherData,
  },
});

export const employeeSliceAction = weatherSlice.actions;
export const employeeSliceSelectors = weatherSlice.selectors;
