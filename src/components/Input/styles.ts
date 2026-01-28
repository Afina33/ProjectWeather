import styled from "@emotion/styled"

interface InputComponentProps {
  $error?: string | undefined
}

const generateInputBorder = (
  error: string | undefined,
  disabled: boolean | undefined,
) => {
  if (disabled) {
    return "#acacacff"
  } else {
    if (!!error) {
      return "#ff6868ff"
    } else {
      return "#3f3f3f"
    }
  }
}

export const InputWrapper = styled.div``

export const InputLabel = styled.label`
  font-size: 16px;
  color: hsl(0, 0%, 44%);
`

export const InputComponent = styled.input<InputComponentProps>`
  background-color: #ffffff28;
  backdrop-filter: blur(16px);
  height: 48px;
  width: 550px;
  padding: 12px, 14px;
  font-size: 20px;
  color: #fff;
  border: none;
  outline: none;

  ${({ disabled, $error }) => generateInputBorder($error, disabled)};
  border: 1px solid #fff;
  border-radius: 40px;
  padding: 22px;
  outline: none;

  &::placeholder {
    color: #ffffff;
    font-size: 16px;
  }
`

export const ErrorText = styled.div`
  height: 18px;
  font-size: 16px;
  color: #ff6868ff;
`
