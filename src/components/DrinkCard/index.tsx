import { Drink } from "../../types";
import styles from "./style.module.scss";
import heartIconCrl from "../../assets/icons/heart-clr.svg";
import heartIconOtl from "../../assets/icons/heart-otl.svg";

type DrinkCardProps = {
  isFav: boolean;
  cssClasses: string;
  drink: Drink;
  toggleFavorite: (drink: Drink) => void;
};

export default function DrinkCard({
  isFav,
  cssClasses,
  drink,
  toggleFavorite
}: DrinkCardProps): JSX.Element {
  return (
    <div className={`${cssClasses} ${styles.card}`} data-testid="drink-card">
      <img
        src={drink.strDrinkThumb}
        alt="drink-card"
        data-testid="drink-card-img"
      />
      <div className={styles.details}>
        <section>
          <p data-testid="drink-card-name">{drink.strDrink}</p>
          <p data-testid="drink-card-category">{drink.strCategory}</p>
        </section>
        <img
          src={isFav ? heartIconCrl : heartIconOtl}
          alt="like"
          onClick={() => toggleFavorite(drink)}
          data-testid="drink-card-like"
        />
      </div>
    </div>
  );
}
