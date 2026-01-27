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
  WidthButton,
} from "./styles"
import { v4 } from "uuid"
import {
  employeeSliceAction,
  weatherSlice,
} from "store/redux/weatherSlice/weatherSlice"
import Button from "components/Button/Button"
import { ErrorOutput } from "../ErrorOutput/ErrorOutput"
import { currentWeather } from "Layout/types"


const validationSchema = Yup.object().shape({
  [CITY_FORM_VALUE.CITY]: Yup.string().required("Введите город").trim(),
})

export default function CreateWeathers() {
  const API_KEY = "d379bb13b3ab34d224e5961a0fbaf3d8"

  const dispatch = useAppDispatch()
  const { currentWeather, error } = useAppSelector(state => state.WEATHER_CARD)

  const formik = useFormik({
    initialValues: {
      [CITY_FORM_VALUE.CITY]: "",
    },
    validationSchema,
    validateOnChange: false,

    onSubmit: async values => {
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

        const CityData = {
          id: v4(),
          city: data.name,
          celsius: data.main.temp,
          icon: data.weather[0].icon,
        }

        // Сохраняем только один объект
        dispatch(employeeSliceAction.setCurrentWeather(CityData))
      } catch (error: any) {
        if (error === "ValidationError") {
          alert(error.message)
          return
        }
      

        const message =
          error?.response?.data?.message ||
          error?.response?.data?.error ||
          error?.message|| 
          'Unknown API error'
          
        dispatch(employeeSliceAction.setError(message))
        alert("Пожалуйста, введите название города")
      }
    },
  })

  const onDelete = (cityWeather: currentWeather) => {
    if (!cityWeather.id) return
    dispatch(employeeSliceAction.deleteCard(cityWeather.id))
    dispatch(employeeSliceAction.clearCurrentWeather())
  }

  const onSave = () => {
    if (!currentWeather) return
    dispatch(employeeSliceAction.saveWeater(currentWeather))
    dispatch(employeeSliceAction.clearCurrentWeather())
    setTimeout(()=> {alert("Информация сохранена"), 0})
    
    
  }

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
          error={formik.errors[CITY_FORM_VALUE.CITY]}
        />
        <ButtonStyle>
          <Button type="submit" name={"Search"} />
        </ButtonStyle>
      </InputContainer>

      {/* Вывод одной карточки погоды */}
      {currentWeather && (
        <OutputDiv>
          <DivWrapper>
            <CityCelsiusWrapper>
              <CelsiusTeitel>
                {Math.round(currentWeather.celsius)}°
              </CelsiusTeitel>
              <CityName>{currentWeather.city}</CityName>
            </CityCelsiusWrapper>
            <ImgWapper>
              <GetImg
                src={`http://openweathermap.org/img/w/${currentWeather.icon}.png`}
                alt={`Погода в ${currentWeather.city}`}
              />
              <GetImg
                src={`http://openweathermap.org/img/w/${currentWeather.icon}.png`}
                alt={`Погода в ${currentWeather.city}`}
              />
              <GetImg
                src={`http://openweathermap.org/img/w/${currentWeather.icon}.png`}
                alt={`Погода в ${currentWeather.city}`}
              />
            </ImgWapper>
          </DivWrapper>
          <ButtonWrapper>
            <WidthButton>
              <Button type="button" name={"Save"} onClick={onSave}  weatherB/>
            </WidthButton>
            <WidthButton>
              <Button
                weatherB
                type="button"
                name={"Delete"}
                onClick={() => onDelete(currentWeather!)}
              />
            </WidthButton>
          </ButtonWrapper>
        </OutputDiv>
      )}
      {!error && <ErrorOutput />}
    </FormStyle>
  )
}
