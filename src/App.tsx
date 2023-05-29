import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/result" element={<SearchResults />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
