import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home"; 
import ProductDetail from "./pages/ProductDetail"; 
import AdminProducts from "./pages/AdminProducts";
import AdminNew from "./pages/AdminNew";
import SearchResults from "./pages/SearchResults";

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

        {/* Search Results Page */}
        <Route path="/search" element={<SearchResults />} />

        {/* Admin Pages */}
        <Route path="/admin/products" element={<AdminProducts />} />
        <Route path="/admin/products/new" element={<AdminNew />} />
        
      </Routes>
    </Router>
  );
}

export default App;
