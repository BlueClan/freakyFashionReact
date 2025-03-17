import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductGrid from "../components/ProductGrid";
import Header from "../components/Header";
import InfoGrid from "../components/InfoGrid";
import Footer from "../components/Footer";
import "../Styles/Home.css";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (!query) return;

      console.log("Fetching search results for query:", query); // Log the query

      try {
        const response = await fetch(`http://localhost:3000/api/search?q=${query}`);
        const data = await response.json();

        console.log("Search API response:", data); // Log the API response

        setProducts(data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [query]);

  return (
    <div>
      <Header />
      <div className="content-container">
        <h2>
          {loading
            ? "Laddar..."
            : `Hittade ${products.length} produkter`}
        </h2>
        {loading ? (
          <p>Laddar...</p>
        ) : products.length > 0 ? (
          <ProductGrid products={products} />
        ) : (
          <p>Inga produkter tillgängliga just nu.</p>
        )}
      </div>
      <InfoGrid />
      <Footer />
    </div>
  );
};

export default SearchResults;
