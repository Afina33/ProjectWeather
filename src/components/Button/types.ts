export type ButtonTypes = "submit" | "reset" | "button";

export interface ButtonProps {
  name: string;
  type?: ButtonTypes;
  onClick?: () => void;
  isRed?: boolean;
  isDisabled?: boolean;
  weatherB?: boolean;
}

/** ❗ ТОЛЬКО для styled-component */
export interface ButtonComponentProps {
  $isRed?: boolean;
  $weatherB?: boolean;
}
