import { BrowserRouter, Route, Routes } from "react-router-dom";
import PairPage from "./pages/PairPage";
import TokenPage from "./pages/TokenPage";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TokenPage />} />
        <Route path="/pairPage" element={<PairPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
