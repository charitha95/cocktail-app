import classes from "./style.module.scss";
import Typewriter from "typewriter-effect";
import shuffleIcon from "../../assets/icons/shuffle.svg";

const texts = [
  "crafting unique drinks.",
  "bartending expertise.",
  "shaking, stirring, muddling, and garnishing.",
  "balancing flavors and combining ingredients."
];

type RandomDrinksActionType = {
  fetchData: () => Promise<void>;
};
export default function RandomDrinksAction({
  fetchData
}: RandomDrinksActionType): JSX.Element {
  return (
    <div className={classes["action-container"]}>
      <div className={classes.info}>
        <span>
          Unleash Your Mixology Skills with Cocktail Craze! Discover a wide
          range of cocktail recipes, learn the art of
        </span>
        <Typewriter
          options={{
            strings: texts,
            autoStart: true,
            loop: true
          }}
        />
      </div>
      <button
        onClick={() => {
          fetchData();
        }}
        className={classes["semi-circle"]}
      >
        The Cocktail Shuffle
        <img src={shuffleIcon} alt="shuffle" />
      </button>
    </div>
  );
}
