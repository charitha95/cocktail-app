import { Drink } from "../../types";
import DrinkCard from "../DrinkCard";
import SearchBar from "../SearchBar";
import classes from "./style.module.scss";

type ResultsGridProps = {
  handleSearch: (searchValue: HTMLInputElement | null) => void;
  toggleFavorite: (drink: Drink) => void;
  drinks: Drink[];
};

export default function ResultsGrid({
  handleSearch,
  drinks,
  toggleFavorite
}: ResultsGridProps): JSX.Element {
  return (
    <main className={`${classes.results} grid`}>
      <section className={`col-12`}>
        <div className={classes["search-bar"]}>
          <SearchBar handleSearch={handleSearch} />
        </div>
      </section>
      <section className={`${classes.drinks} col-12 grid`}>
        {drinks.length > 0 ? (
          <>
            {drinks.map((drink: Drink) => (
              <DrinkCard
                key={drink.idDrink}
                drink={drink}
                cssClasses={`col-2 col-md-2`}
                toggleFavorite={() => toggleFavorite(drink)}
              />
            ))}
          </>
        ) : (
          <p>No items in the favorites list.</p>
        )}
      </section>
    </main>
  );
}
