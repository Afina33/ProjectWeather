import styled from "@emotion/styled";

interface InputComponentProps {
  $error?: string | undefined;
}

const generateInputBorder = (
  error: string | undefined,
  disabled: boolean | undefined
) => {
  if (disabled) {
    return "#acacacff";
  } else {
    if (!!error) {
      return "#ff6868ff";
    } else {
      return "#3f3f3f";
    }
  }
};

export const InputWrapper = styled.div`
    width: 100%;
    height: 48px;
    border: 1px solid #fff;
    backdrop-filter: blur(16px);
    background-color: #ffffff28;
    border-radius: 40px;
    color: rgb(255, 255, 255);
    padding: 12px 20px;
    font-size: 20px;
`;

export const InputLabel = styled.label`
  font-size: 16px;
  color: hsl(0, 0%, 44%);
`;

export const InputComponent = styled.input<InputComponentProps>`
  width: 100%;
  height: 50px;
  border: 1px solid
    ${({ disabled, $error }) => generateInputBorder($error, disabled)};
  border-radius: 4px;
  padding: 12px;
  outline: none;

  &::placeholder {
    color: #6f6f6f;
    font-size: 16px;
  }
`;

export const ErrorText = styled.div`
  height: 18px;
  font-size: 16px;
  color: #ff6868ff;
`;
