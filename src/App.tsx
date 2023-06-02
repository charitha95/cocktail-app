import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import FavoritesProvider from "./contexts/FavoriteDrinksContext";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Header";

function App(): JSX.Element {
  return (
    <ErrorBoundary>
      <FavoritesProvider>
        <BrowserRouter>
          <Header />
          <AppRoutes />
        </BrowserRouter>
      </FavoritesProvider>
    </ErrorBoundary>
  );
}

export default App;
