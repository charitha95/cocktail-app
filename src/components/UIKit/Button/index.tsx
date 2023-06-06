import { ReactNode, MouseEvent } from "react";
import styles from "./style.module.scss";

type ButtonProps = {
  variant: "primary" | "secondary";
  icon?: ReactNode;
  name?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

/**
 * Button Component
 *
 * A customizable button component that supports different variants, icons, and click events.
 *
 * @component
 * @param {ButtonProps} props - The component props.
 * @param {"primary" | "secondary"} props.variant - The variant of the button. Determines the button's appearance.
 * @param {ReactNode} props.icon - The optional icon element to be displayed within the button.
 * @param {string} props.name - The optional name or text to be displayed alongside the icon.
 * @param {Function} props.onClick - The optional callback function to handle the button click event.
 *                                   It receives the click event as a parameter.
 * @returns {JSX.Element} - The rendered Button component.
 */

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
