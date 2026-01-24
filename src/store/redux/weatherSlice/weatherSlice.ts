import { createAppSlice } from "store/createAppSlice"
import { type weatherInitialState } from "./types"
import { PayloadAction } from "@reduxjs/toolkit"
import { currentWeather } from "Layout/types"


const weatherInitialState:  weatherInitialState  = {
  error: undefined,
  currentWeather: undefined,
  weatherData:[],
  city:  "",
};

export const weatherSlice  = createAppSlice({
  name: "WEATHER_CARD",
  initialState: weatherInitialState,
  reducers:{
    setCity: (state, action : PayloadAction<string>)=> {state.city = action.payload},
    personCard: (state: weatherInitialState, action: PayloadAction<currentWeather>) => {
      state.weatherData.push(action.payload);
    },
    deleteCard: (
      state: weatherInitialState,
      action: PayloadAction<string>
    ) =>{
      state.weatherData = state.weatherData.filter(
        (Card)=> Card.id !== action.payload
      );
    } ,
    deleteCards: () => weatherInitialState,
    deleteError: () => weatherInitialState,
  },
  selectors: {
    person: (state: weatherInitialState) => state.weatherData
  }
})

export const employeeSliceAction = weatherSlice.actions

export const employeeSliceSelectors = weatherSlice.selectors