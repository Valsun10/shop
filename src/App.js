import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
