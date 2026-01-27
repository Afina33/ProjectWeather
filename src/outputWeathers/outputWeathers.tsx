import { useAppSelector } from "store/hooks"
import { OutputWeathersWrapper, WeatherCard } from "./styles"
import {
  CelsiusTeitel,
  CityCelsiusWrapper,
  CityName,
  GetImg,
  ImgWapper,
} from "../CreateWeathers/styles"

export default function outputWeathers() {
  const weatherList = useAppSelector(state => state.WEATHER_CARD.weatherData)

  if (!weatherList.length) {
    return <p>Сохранённых городов нет</p>
  }

  return (
    <OutputWeathersWrapper>
      {weatherList.map(weather => (
        <WeatherCard key={weather.id}>
          <CityCelsiusWrapper>
            <CelsiusTeitel>{Math.round(weather.celsius)}°C</CelsiusTeitel>
            <CityName>{weather.city}</CityName>
          </CityCelsiusWrapper>
          <ImgWapper>
            <GetImg
              src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
              alt={weather.city}
            />
            <GetImg
              src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
              alt={weather.city}
            />
            <GetImg
              src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
              alt={weather.city}
            />
          </ImgWapper>
        </WeatherCard>
      ))}
    </OutputWeathersWrapper>
  )
}
