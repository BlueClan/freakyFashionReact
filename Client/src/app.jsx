import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home"; 
import ProductDetail from "./pages/ProductDetail"; 
import AdminProduct from "./pages/AdminProduct";
import AdminNew from "./pages/AdminNew";
function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <Router>
      <Routes>
        {/* Home Page - Pass fetched products */}
        <Route path="/" element={<Home products={products} />} />

        {/* Product Detail Page */}
        <Route path="/products/:slug" element={<ProductDetail />} />

        {/* Admin Pages */}
        <Route path="/admin" element={<AdminProduct />} />
        <Route path="/admin/new" element={<AdminNew />} />
        
      </Routes>
    </Router>
  );
}

export default App;
