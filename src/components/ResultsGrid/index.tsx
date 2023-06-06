import { Drink } from "../../types";
import DrinkCard from "../DrinkCard";
import SearchBar from "../SearchBar";
import styles from "./style.module.scss";
import EmptyState from "../EmptyState";

type ResultsGridProps = {
  favorites: Drink[];
  handleSearch: (searchValue: string) => void;
  toggleFavorite: (drink: Drink) => void;
  drinks: Drink[];
  emptyStateMessage: string;
};

export default function ResultsGrid({
  favorites,
  handleSearch,
  drinks,
  toggleFavorite,
  emptyStateMessage
}: ResultsGridProps): JSX.Element {
  const hasDrinks = drinks && drinks.length > 0;

  return (
    <main className={`${styles.results} grid`}>
      <section className={`col-12`}>
        <div className={styles["search-bar"]}>
          <SearchBar handleSearch={handleSearch} />
        </div>
      </section>
      <section className={`${styles.drinks} col-12 ${hasDrinks ? "grid" : ""}`}>
        {hasDrinks ? (
          <>
            {drinks.map((drink: Drink) => (
              <DrinkCard
                isFav={
                  favorites.filter((fav) => fav.idDrink === drink.idDrink)
                    .length > 0
                }
                key={drink.idDrink}
                drink={drink}
                cssClasses={`col-2 col-md-2`}
                toggleFavorite={() => toggleFavorite(drink)}
              />
            ))}
          </>
        ) : (
          <EmptyState message={emptyStateMessage} />
        )}
      </section>
    </main>
  );
}
