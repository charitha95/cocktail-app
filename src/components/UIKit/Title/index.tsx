import styles from "./style.module.scss";

export default function Title({ title }: { title: string }): JSX.Element {
  return <h1 className={styles.title}>{title}</h1>;
}
