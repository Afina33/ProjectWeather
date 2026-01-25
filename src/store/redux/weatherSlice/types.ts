import { type currentWeather } from "../..//..//Layout/types"

export interface weatherInitialState {
  error: string | null;
  currentWeather?: currentWeather // объект текущей погоды
  weatherData: currentWeather[] // можно оставить для истории
  city: string
}
