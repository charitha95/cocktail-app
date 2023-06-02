import { ReactNode, MouseEvent } from "react";
import classes from "./style.module.scss";

type ButtonProps = {
  variant: "primary" | "secondary";
  icon?: ReactNode;
  name?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export default function Button({
  variant,
  icon,
  name,
  onClick
}: ButtonProps): JSX.Element {
  return (
    <button
      className={`${classes.button} ${classes[`button-${variant}`]} `}
      onClick={onClick}
    >
      {icon && <div className={`${classes["button-icon"]}`}>{icon}</div>}
      {name && <span className={`${classes["button-text"]}`}>{name}</span>}
    </button>
  );
}
