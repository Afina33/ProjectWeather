import ImgSunrise from "..//assets/23.png"
import ImgSunset from "..//assets/закат.png"
import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  OutputWeathersWrapper,
  WeatherCard,
  WrapperButtonDeleteAll,
} from "./styles"
import {
  ButtonWrapper,
  CelsiusTeitel,
  CityCelsiusWrapper,
  CityName,
  DataCityDiv,
  DataUotputDiv,
  DivWrapper,
  GetImg,
  ImgSin,
  ImgWapper,
  OutputP,
  SunDiv,
  TitelData,
  WidthButton,
  WrapperSun,
} from "../CreateWeathers/styles"
import Button from "components/Button/Button"

import { employeeSliceAction } from "store/redux/weatherSlice/weatherSlice"

export default function OutputWeathers() {
   const formatTime = (timestamp: number) =>
    new Date(timestamp * 1000).toLocaleTimeString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit",
    })
  const dispatch = useAppDispatch()
  const weatherList = useAppSelector(state => state.WEATHER_CARD.weatherData)

  const onDelete = (idCard: string) => {
    dispatch(employeeSliceAction.deleteCard(idCard))
  }

  const deleteAllCards = () => {
    dispatch(employeeSliceAction.deleteCardsAll())
  }

  return (
    <OutputWeathersWrapper>
      {weatherList.map(weather => (
        <WeatherCard key={weather.id}>
          <DivWrapper>
            <CityCelsiusWrapper>
              <CelsiusTeitel>{Math.round(weather.celsius)}°C</CelsiusTeitel>
              <CityName>{weather.city}</CityName>
            </CityCelsiusWrapper>

            <ImgWapper>
              <GetImg
                src={`https://openweathermap.org/img/w/${weather.icon}.png`}
                alt={weather.city}
              />
              <GetImg
                src={`https://openweathermap.org/img/w/${weather.icon}.png`}
                alt={weather.city}
              />
              <GetImg
                src={`https://openweathermap.org/img/w/${weather.icon}.png`}
                alt={weather.city}
              />
            </ImgWapper>
          </DivWrapper>
           <DataUotputDiv>
            <DataCityDiv>
              <DataCityDiv></DataCityDiv>
              <OutputP>Feels like:</OutputP>
              <TitelData >{weather.FeelsLike}</TitelData >
              </DataCityDiv>
            <WrapperSun >
            <SunDiv>
              <ImgSin src={ImgSunrise} alt="sun" />
              <TitelData >{formatTime(weather.sunrise)}</TitelData >
            </SunDiv>
            <SunDiv>
              <ImgSin src={ImgSunset} alt="sun" />
              <TitelData >{formatTime(weather.sunset)}</TitelData >
            </SunDiv>
            </WrapperSun>
          </DataUotputDiv>
          <DataUotputDiv>
            <DataCityDiv>
              <OutputP>Temp min:</OutputP>
              <TitelData >{weather.tempMin}</TitelData >
            </DataCityDiv>
            <DataCityDiv>
              <OutputP>Temp max:</OutputP>
              <TitelData >{weather.tempMax}</TitelData >
            </DataCityDiv>
          </DataUotputDiv>
          <DataUotputDiv>
            <DataCityDiv>
                <OutputP>Pressure:</OutputP>
                <TitelData >{weather.pressure}</TitelData >
            </DataCityDiv>
            <DataCityDiv>
              <OutputP>Visibility:</OutputP>
              <TitelData >{weather.visibility}</TitelData >
         </DataCityDiv>
          </DataUotputDiv>
          <DataUotputDiv>
          <DataCityDiv>
              <OutputP>Speed:</OutputP>
              <TitelData >{weather.speed}</TitelData>
          </DataCityDiv>
          <DataCityDiv>
            <OutputP>Deg:</OutputP>
          <TitelData >{weather.deg}</TitelData >
          </DataCityDiv>
          </DataUotputDiv>
          <OutputP>Humidity:</OutputP>
          <TitelData >{weather.humidity}</TitelData >
          <ButtonWrapper>
            <WidthButton>
              <Button
                type="button"
                name="Delete"
                weatherB
                onClick={() => onDelete(weather.id)}
              />
            </WidthButton>
          </ButtonWrapper>
        </WeatherCard>
      ))}
      {weatherList.length >= 2 && (
        <WrapperButtonDeleteAll>
          <Button
            type="button"
            name="Delete all cards"
        
            onClick={deleteAllCards}
          />
        </WrapperButtonDeleteAll>
      )}
    </OutputWeathersWrapper>
  )
}
