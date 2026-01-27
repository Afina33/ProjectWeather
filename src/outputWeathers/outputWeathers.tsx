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
  DivWrapper,
  GetImg,
  ImgWapper,
  WidthButton,
} from "../CreateWeathers/styles"
import Button from "components/Button/Button"

import { employeeSliceAction } from "store/redux/weatherSlice/weatherSlice"

export default function OutputWeathers() {
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
