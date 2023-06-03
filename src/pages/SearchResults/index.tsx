import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import { useContext } from "react";
import { FavoriteDrinksContext } from "../../contexts/FavoriteDrinksContext";
import { BASE_URL } from "../../constants";
import ResultsGrid from "../../components/ResultsGrid";

export default function SearchResults(): JSX.Element {
  const { search } = useParams();

  const url = `${BASE_URL}/search.php?s=${search}`;

  const { data, isLoading, error, fetchData } = useFetchData(url);

  const { favorites, toggleFavorites } = useContext(FavoriteDrinksContext);

  if (isLoading) {
    return <div>Loading...</div>;
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
      // implement search here
    }
  };

  return (
    <ResultsGrid
      favorites={favorites}
      drinks={drinks}
      handleSearch={handleSearch}
      toggleFavorite={toggleFavorites}
    />
  );
}
