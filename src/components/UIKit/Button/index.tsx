import { ReactNode, MouseEvent } from "react";
import styles from "./style.module.scss";

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
      className={`${styles.button} ${styles[`button-${variant}`]} `}
      onClick={onClick}
    >
      {icon && <div className={`${styles["button-icon"]}`}>{icon}</div>}
      {name && <span className={`${styles["button-text"]}`}>{name}</span>}
    </button>
  );
}
