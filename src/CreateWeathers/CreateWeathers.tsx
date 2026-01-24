// // const weatherInitialState = {
// // error: undefined.
// // currentWeather: undefined,
// // weatherData: []
// // }

import { CITY_FORM_VALUE } from "./types"
import { useAppDispatch } from "store/hooks"
import { useFormik } from "formik"
import Input from "components/Input/Input"
import * as Yup from "yup"
import Button from "components/Button/Button"
import { FormStyle, InputContainer, ButtonStyle, InputStyle } from "./styles"
import { employeeSliceAction } from "store/redux/weatherSlice/weatherSlice"

const validationSchema = Yup.object().shape({
  [CITY_FORM_VALUE.CITY]: Yup.string().required("Введите город"),
})
export default function CreateWeathers() {
  const dispatch = useAppDispatch()
  const formik = useFormik({
    initialValues: {
      [CITY_FORM_VALUE.CITY]: "",
    },
    validationSchema,
    validateOnChange: false,
    onSubmit: values => {
      if (!values[CITY_FORM_VALUE.CITY].trim()) {
        alert("Пожалуйста, введите название города")
        return
      }
      dispatch(employeeSliceAction.setCity(values[CITY_FORM_VALUE.CITY]))
    },
  })
  return (
    <FormStyle onSubmit={formik.handleSubmit}>
      <InputContainer>
        <InputStyle>
          <Input
            id={CITY_FORM_VALUE.CITY}
            name={CITY_FORM_VALUE.CITY}
            placeholder="Enter city"
            label=""
            value={formik.values[CITY_FORM_VALUE.CITY]}
            onChange={formik.handleChange}
          />
        </InputStyle>
        <ButtonStyle>
          <Button type="submit" name={"Search"}/>
        </ButtonStyle>
      </InputContainer>
    </FormStyle>
  )
}


