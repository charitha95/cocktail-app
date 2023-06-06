import styles from "./style.module.scss";

/**
 * Title Component
 *
 * A simple component to display a title with custom styling.
 *
 * @component
 * @param {{ title: string }} props - The component props.
 * @param {string} props.title - The title text to be displayed.
 * @returns {JSX.Element} - The rendered Title component.
 */

export default function Title({ title }: { title: string }): JSX.Element {
  return <h1 className={styles.title}>{title}</h1>;
}
