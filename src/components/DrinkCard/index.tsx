import { Drink } from "../../types";
import classes from "./style.module.scss";
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
    <div className={`${cssClasses} ${classes.card}`}>
      <img src={drink.strDrinkThumb} alt="drink-card" />
      <div className={classes.details}>
        <section>
          <p>{drink.strDrink}</p>
          <p>{drink.strCategory}</p>
        </section>
        <img
          src={isFav ? heartIconCrl : heartIconOtl}
          alt="like"
          onClick={() => toggleFavorite(drink)}
        />
      </div>
    </div>
  );
}
