import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import FavoritesProvider from "./contexts/FavoriteDrinksContext";

function App(): JSX.Element {
  return (
    <FavoritesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/result/:search" element={<SearchResults />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
    </FavoritesProvider>
  );
}

export default App;
