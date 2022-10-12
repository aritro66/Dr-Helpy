import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Product";
import Disease from "./pages/Disease";
import DiseaseInfo from "./pages/Disease/diseaseInfo";
import ProductInfo from "./pages/Product/productInfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:id" element={<ProductInfo />} />
        <Route path="/disease" element={<Disease />} />
        <Route path="/disease/:id" element={<DiseaseInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
