
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar/Navbar';
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import DetailProduct from "./pages/DetailProduct";
import { useEffect } from "react";
import { testConnection } from "./firebase/testFirestore";
import { fetchProducts } from "./app/features/product/productSlice";
import { useAppDispatch } from "./app/store";

function App() {
  useEffect(() => {
    testConnection();
  }, []);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/products/:id" element={<DetailProduct />} />
          <Route path="/categories/:category" element={<ProductsPage />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
