import axios from "axios"
import { CITY_FORM_VALUE } from "./types"
import { useAppDispatch, useAppSelector } from "store/hooks"
import { useFormik } from "formik"
import Input from "components/Input/Input"
import * as Yup from "yup"
import {
  ButtonStyle,
  FormStyle,
  InputContainer,
  OutputDiv,
  CityName,
  CelsiusTeitel,
  CityCelsiusWrapper,
  ImgWapper,
  GetImg,
  ButtonWrapper,
  DivWrapper,
  WidthButton
} from "./styles"
import { v4 } from "uuid"
import { employeeSliceAction } from "store/redux/weatherSlice/weatherSlice"
import Button from "components/Button/Button"

const validationSchema = Yup.object().shape({
  [CITY_FORM_VALUE.CITY]: Yup.string()
    .required("Введите город")
    .typeError("Пожалуйста, введите название города"),
})

export default function CreateWeathers() {
  const API_KEY = "d379bb13b3ab34d224e5961a0fbaf3d8"

  const dispatch = useAppDispatch()
  const weather = useAppSelector(state => state.WEATHER_CARD.currentWeather) // <- один объект

  const formik = useFormik({
    initialValues: {
      [CITY_FORM_VALUE.CITY]: "",
    },
    validationSchema,
    validateOnChange: false,

    onSubmit: async values => {
      // if (!values[CITY_FORM_VALUE.CITY].trim()) {
      //   alert("Пожалуйста, введите название города")
      //   return
      // }

      try {
        const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather",
          {
            params: {
              q: values[CITY_FORM_VALUE.CITY],
              appid: API_KEY,
              units: "metric",
            },
          },
        )

        const data = response.data

        const weatherCard = {
          id: v4(),
          city: data.name,
          celsius: data.main.temp,
          icon: data.weather[0].icon, // <- код иконки
        }

        // Сохраняем только один объект
        dispatch(employeeSliceAction.setCurrentWeather(weatherCard))
      } catch (error: any) {
        // alert(error.response?.data?.message || "Ошибка запроса")
        dispatch(employeeSliceAction.setError(error));
      }
    },
  })

  return (
    <FormStyle onSubmit={formik.handleSubmit}>
      <InputContainer>
        <Input
          id="cityId"
          name={CITY_FORM_VALUE.CITY}
          placeholder="Enter city"
          label=""
          value={formik.values[CITY_FORM_VALUE.CITY]}
          onChange={formik.handleChange}
        />
        <ButtonStyle>
          <Button type="submit" name={"Search"} />
        </ButtonStyle>
      </InputContainer>

      {/* Вывод одной карточки погоды */}
      {weather && (
        <OutputDiv>
          <DivWrapper>
              <CityCelsiusWrapper>
                <CelsiusTeitel>{weather.celsius}°</CelsiusTeitel>
                <CityName>{weather.city}</CityName>
              </CityCelsiusWrapper>
              <ImgWapper>
                <GetImg 
                  src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                  alt={`Погода в ${weather.city}`}
                />
                <GetImg 
                  src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                  alt={`Погода в ${weather.city}`}
                />
                <GetImg 
                  src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                  alt={`Погода в ${weather.city}`}
                />
              </ImgWapper>
          </DivWrapper>
          <ButtonWrapper>
            <WidthButton><Button type="submit" name={"Save"} isTransparent /></WidthButton>
            <WidthButton><Button type="submit" name={"Delete"} isTransparent  /></WidthButton>
          </ButtonWrapper>
        </OutputDiv>
      )}
    </FormStyle>
  )
}
