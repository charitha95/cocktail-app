import FavoritesProvider from "./contexts/FavoriteDrinksContext";
import AppRoutes from "./routes/AppRoutes";

function App(): JSX.Element {
  return (
    <FavoritesProvider>
      <AppRoutes />
    </FavoritesProvider>
  );
}

export default App;
