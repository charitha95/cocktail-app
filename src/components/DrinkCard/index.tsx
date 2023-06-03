import { Drink } from "../../types";
import classes from "./style.module.scss";
import heartIcon from "../../assets/icons/heart-clr.svg";

type DrinkCardProps = {
  cssClasses: string;
  drink: Drink;
  toggleFavorite: (drink: Drink) => void;
};

export default function DrinkCard({
  cssClasses,
  drink,
  toggleFavorite
}: DrinkCardProps): JSX.Element {
  return (
    <div className={`${cssClasses} ${classes.card}`}>
      <img src={drink.strDrinkThumb} alt="drink-card" />
      <div className={classes.details}>
        <section>
          <p>{drink.strDrink}</p>
          <p>{drink.strCategory}</p>
        </section>
        <img src={heartIcon} alt="like" onClick={() => toggleFavorite(drink)} />
      </div>
    </div>
  );
}
