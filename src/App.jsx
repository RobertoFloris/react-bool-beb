import Results from "./pages/Results";
import HomePage from "./pages/HomePage";
import DefaultLayout from "./layouts/DefaultLayout";
import { GlobalProvider } from "./context/GlobalContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailsPage from "./pages/DetailsPage";
import AddHome from "./pages/AddHome";

const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/results" element={<Results />} />
            <Route path="/:id" element={<DetailsPage />} />
            <Route path="/nuova-casa" element={<AddHome />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
};

export default App;
