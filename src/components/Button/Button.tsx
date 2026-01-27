import { type ButtonProps } from "./types";
import { ButtonComponent } from "./styles";

function Button({
  name,
  type = "button",
  onClick,
  isRed = false,
  isDisabled = false,
  weatherB = false,
}: ButtonProps) {
  return (
    <ButtonComponent
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      $isRed={isRed}
      $weatherB={weatherB}
      className="button_component"
    >
      {name}
    </ButtonComponent>
  );
}

export default Button;
