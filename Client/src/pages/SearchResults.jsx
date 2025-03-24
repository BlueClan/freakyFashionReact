import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductGrid from "../components/ProductGrid";
import Header from "../components/Header";
import InfoGrid from "../components/InfoGrid";
import Footer from "../components/Footer";
import "../Styles/Home.css";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || ""; // Default to empty string if no query
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.title = query
      ? `Sökresultat för "${query}" - Freaky Fashion`
      : "Sökresultat - Freaky Fashion";
  }, [query]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      setLoading(true); // Reset loading state on new search
      setError(null); // Reset error state on new search
      setProducts([]); // Reset products on new search

      if (!query) {
        setLoading(false);
        return;
      }

      console.log("Fetching search results for query:", query);
      try {
        const response = await fetch(
          `http://localhost:3000/api/products/search?q=${encodeURIComponent(query)}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const formattedData = data.map((product) => ({
          ...product,
          id: String(product.id),
        }));
        setProducts(formattedData);
      } catch (error) {
        console.error("Error fetching search results:", error);
        setError("Kunde inte hämta sökresultat. Försök igen senare.");
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [query]); // Re-run when query changes

  return (
    <div>
      <Header />
      <div className="content-container">
        <h2>
          {loading ? "Laddar..." : `Hittade ${products.length} produkter`}
        </h2>
        {loading ? (
          <p>Laddar...</p>
        ) : error ? (
          <p>{error}</p>
        ) : products.length > 0 ? (
          <ProductGrid products={products} />
        ) : (
          <p>Inga produkter hittades.</p>
        )}
      </div>
      <InfoGrid />
      <Footer />
    </div>
  );
};

export default SearchResults;