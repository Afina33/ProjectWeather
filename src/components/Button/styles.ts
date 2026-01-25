import styled from "@emotion/styled";

interface ButtonComponentProps {
  $isRed: boolean;
}

const generateButtonColor = (isRed: boolean, disabled: boolean | undefined, ) => {
  if (disabled) {
    return "#acacacff";
  } else {
    if (isRed) {
      return "#fc3333ff" ;
    }
    else {
      return "#3678B4";
    }
  }
};


const generateButtonColorOnHover = (
  isRed: boolean,
  disabled: boolean | undefined,
) => {
  if (disabled) {
    return "#acacacff";
  } else {
    if (isRed) {
      return "#ff6868ff";
    }
     else {
      return "#4c84b7";
    }
  }
};

export const ButtonComponent = styled.button<ButtonComponentProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  padding: 0;
  height: 50px;
  width: 100%;
  border-radius: 50px;
  background-color: ${({ $isRed, disabled }) =>
    generateButtonColor($isRed, disabled, )};
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${({ $isRed, disabled }) =>
      generateButtonColorOnHover($isRed, disabled, )};
  }
`;
