import { createAppSlice } from "store/createAppSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { currentWeather } from "Layout/types";
import  {type weatherInitialState} from "./types"


const weatherInitialState: weatherInitialState = {
  error: undefined,
  currentWeather: undefined,
  weatherData: [],

};

export const weatherSlice = createAppSlice({
  name: "WEATHER_CARD",
  initialState: weatherInitialState,
  reducers: {


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
    setError(state, action: PayloadAction<undefined>) {
      state.error = action.payload;
      // state.currentWeather = undefined; // для очистки поля если будет ошибка
    },
    clearError(state) {
      state.error = undefined
    },

  deleteCards(state) {
  state.weatherData = []
}

  },

  selectors: {
    currentWeather: (state: weatherInitialState) => state.currentWeather,
    person: (state: weatherInitialState) => state.weatherData,
  },
});

export const employeeSliceAction = weatherSlice.actions;
export const employeeSliceSelectors = weatherSlice.selectors;
