import { type currentWeather } from "../..//..//Layout/types"

export interface weatherInitialState {
  error?: string
  currentWeather?: currentWeather // объект текущей погоды
  weatherData: currentWeather[] // можно оставить для истории
  city: string
}
