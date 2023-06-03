import classes from "./style.module.scss";

export default function Title({ title }: { title: string }): JSX.Element {
  return <h1 className={classes.title}>{title}</h1>;
}
