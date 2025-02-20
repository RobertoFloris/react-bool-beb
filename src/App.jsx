import Home from "./pages/Home"
import DefaultLayout from "./layouts/DefaultLayout"
import { GlobalProvider } from "./context/GlobalContext"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import DetailsPage from "./pages/DetailsPage"

const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<DetailsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App