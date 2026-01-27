import { employeeSliceAction, } from "store/redux/weatherSlice/weatherSlice";
import { useAppDispatch, useAppSelector } from "store/hooks";

import { DeleteButton, ErrorText, ErrorTitle, ErrorWrapper, WrapperErrorDiv} from "./styles";
import Button from "..//components/Button/Button";

export function ErrorOutput() {
  const dispatch = useAppDispatch();
  const error = useAppSelector((state) => state.WEATHER_CARD.error);

  const handleDeleteError = () => {
    dispatch(employeeSliceAction.clearError());
    alert("Ошибка удалена успешно");
  };

  if (!error) return null;

  return (
    <ErrorWrapper>
      <WrapperErrorDiv>
        <ErrorTitle>API Error</ErrorTitle>
        <ErrorText>{error}</ErrorText>
      </WrapperErrorDiv>
      <DeleteButton>
        <Button type="button" name={"Delete"} onClick={handleDeleteError}  weatherB/>
      </DeleteButton>
    </ErrorWrapper>
  );
}