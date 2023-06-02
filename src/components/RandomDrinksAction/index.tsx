import classes from "./style.module.scss";

type RandomDrinksActionType = {
  fetchData: () => Promise<void>;
};
export default function RandomDrinksAction({
  fetchData
}: RandomDrinksActionType): JSX.Element {
  return (
    <div className={classes["action-container"]}>
      <button
        onClick={() => {
          fetchData();
        }}
      >
        shuffle
      </button>
    </div>
  );
}
