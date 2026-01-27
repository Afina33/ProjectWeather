import styled from "@emotion/styled";
import { ButtonComponentProps } from "./types";

const generateButtonColor = (
  isRed?: boolean,
  disabled?: boolean,
  weatherB?: boolean
) => {
  if (disabled) return "#acacacff";
  if (weatherB) return "transparent"; // фон для weatherB всегда прозрачный
  if (isRed) return "#fc3333ff";
  return "#3678B4";
};

const generateBorder = (weatherB?: boolean) =>
  weatherB ? "1px solid #ffffff" : "none";

export const ButtonComponent = styled.button<ButtonComponentProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 50px;
  width: 100%;
  border-radius: 50px;

  border: ${({ $weatherB }) => generateBorder($weatherB)};

  background-color: ${({ $isRed, $weatherB, disabled }) =>
    generateButtonColor($isRed, disabled, $weatherB)};

  color: #ffffff;
  font-size: 20px;
  font-weight: bold;

  cursor: ${({ disabled }) =>
    disabled ? "not-allowed" : "pointer"};

  transition: border 0.3s ease;

  &:hover {
    /* Если это weatherB и кнопка не disabled — бордер серый */
    ${({ $weatherB, disabled }) =>
      $weatherB && !disabled ? "border: 1px solid #6b9eeb;" : ""}
    
    /* Фон не меняется, остаётся прозрачным для weatherB */
    background-color: ${({ $weatherB, $isRed, disabled }) =>
      $weatherB ? "transparent" : $isRed ? "#ff6868ff" : "#4c84b7"};
  }
`;
