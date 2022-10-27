import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Product";
import Disease from "./pages/Disease";
import DiseaseInfo from "./pages/Disease/diseaseInfo";
import ProductInfo from "./pages/Product/productInfo";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import MyAccount from "./pages/MyAccount";
import CartList from "./pages/CartList";
import Admin from "./pages/Admin";
function App() {
  const { loginin, admin } = useSelector((state) => state.authReducer);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={!loginin ? <Landing /> : <Navigate to="/home" />}
        />
        <Route
          path="/signup"
          element={!loginin ? <Signup /> : <Navigate to="/home" />}
        />
        <Route
          path="/login"
          element={!loginin ? <Login /> : <Navigate to="/home" />}
        />
        <Route
          path="/home"
          element={loginin ? <Home /> : <Navigate to="/" />}
        />
        <Route
          path="/about"
          element={loginin ? <About /> : <Navigate to="/" />}
        />
        <Route
          path="/product"
          element={loginin ? <Products /> : <Navigate to="/" />}
        />
        <Route
          path="/product/:id"
          element={loginin ? <ProductInfo /> : <Navigate to="/" />}
        />
        <Route
          path="/disease"
          element={loginin ? <Disease /> : <Navigate to="/" />}
        />
        <Route
          path="/disease/:id"
          element={loginin ? <DiseaseInfo /> : <Navigate to="/" />}
        />
        <Route
          path="/myaccount"
          element={loginin ? <MyAccount /> : <Navigate to="/" />}
        />
        <Route
          path="/myaccount"
          element={loginin ? <MyAccount /> : <Navigate to="/" />}
        />
        <Route
          path="/cartlist"
          element={loginin ? <CartList /> : <Navigate to="/" />}
        />
        <Route
          path="/admin"
          element={loginin && admin ? <Admin /> : <Navigate to="/home" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
