import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import { useContext } from "react";
import { FavoriteDrinksContext } from "../../contexts/FavoriteDrinksContext";
import { BASE_URL } from "../../constants";
import ResultsGrid from "../../components/ResultsGrid";
import DrinkCardSkeleton from "../../components/DrinkCardSkeleton";

export default function SearchResults(): JSX.Element {
  const { search } = useParams();

  const url = `${BASE_URL}/search.php?s=${search}`;

  const { data, isLoading, error, fetchData } = useFetchData(url);

  const { favorites, toggleFavorites } = useContext(FavoriteDrinksContext);

  if (isLoading) {
    return (
      <div className={`skeleton-grid grid`}>
        {Array.from({ length: 12 }).map((_, idx) => (
          <DrinkCardSkeleton key={idx} colClass="col-12 col-md-3" />
        ))}
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // formating data (0 = drinks array)
  const drinks = data[0];

  const handleSearch = (searchValue: HTMLInputElement | null): void => {
    if (searchValue) {
      const value = searchValue.value;
      if (!value) {
        alert("search value cannot be empty!");
        return;
      }
      fetchData(`${BASE_URL}/search.php?s=${value}`);
    }
  };

  return (
    <ResultsGrid
      favorites={favorites}
      drinks={drinks}
      handleSearch={handleSearch}
      toggleFavorite={toggleFavorites}
      emptyStateMessage="No results found :("
    />
  );
}
