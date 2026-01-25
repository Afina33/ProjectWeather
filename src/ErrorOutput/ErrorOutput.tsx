import { weatherSliceAction } from "store/redux/weatherSlice/weatherSlice";
import { useAppDispatch, useAppSelector } from "store/hooks";

import { DeleteButton, ErrorText, ErrorTitle, ErrorWrapper } from "./styles";

export function ErrorOutput() {
  const dispatch = useAppDispatch();
  const error = useAppSelector((state) => state.weather.error);

  const handleDeleteError = () => {
    dispatch(weatherSliceAction.clearError());
    alert("Ошибка удалена успешно");
  };

  if (!error) return null;

  return (
    <ErrorWrapper>
      <ErrorTitle>Ошибка</ErrorTitle>
      <ErrorText>{error}</ErrorText>

      <DeleteButton type="button" onClick={handleDeleteError}>
        Delete
      </DeleteButton>
    </ErrorWrapper>
  );
}