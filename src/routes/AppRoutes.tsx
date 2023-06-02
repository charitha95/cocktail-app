import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SearchResults from "../pages/SearchResults";
import FavoritesDrinks from "../pages/FavoritesDrinks";

export default function AppRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/result/:search" element={<SearchResults />} />
      <Route path="/favorites" element={<FavoritesDrinks />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
}
