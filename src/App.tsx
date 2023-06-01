import ErrorBoundary from "./components/ErrorBoundary";
import FavoritesProvider from "./contexts/FavoriteDrinksContext";
import AppRoutes from "./routes/AppRoutes";

function App(): JSX.Element {
  return (
    <ErrorBoundary>
      <FavoritesProvider>
        <AppRoutes />
      </FavoritesProvider>
    </ErrorBoundary>
  );
}

export default App;
