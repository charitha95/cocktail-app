import styles from "./style.module.scss";
import Typewriter from "typewriter-effect";
import shuffleIcon from "../../assets/icons/shuffle.svg";

const texts = [
  "crafting unique drinks.",
  "bartending expertise.",
  "shaking, stirring, muddling, and garnishing.",
  "balancing flavors and combining ingredients."
];

type RandomDrinksActionProps = {
  fetchData: () => Promise<void>;
};
export default function RandomDrinksAction({
  fetchData
}: RandomDrinksActionProps): JSX.Element {
  return (
    <div className={styles["action-container"]}>
      <div className={styles.info}>
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
        className={styles["semi-circle"]}
      >
        The Cocktail Shuffle
        <img src={shuffleIcon} alt="shuffle" />
      </button>
    </div>
  );
}
