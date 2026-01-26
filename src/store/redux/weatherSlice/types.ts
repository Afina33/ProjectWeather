import { type currentWeather } from "../..//..//Layout/types"

export interface weatherInitialState {
  error: undefined;
  currentWeather?: currentWeather // объект текущей погоды
  weatherData: currentWeather []  // можно оставить для истории

}
