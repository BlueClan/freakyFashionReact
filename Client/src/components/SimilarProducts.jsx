import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../Styles/Home.css';

const SimilarProducts = ({ slug }) => {
  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/products')
      .then((response) => response.json())
      .then((data) => {
        
        const filteredProducts = data.filter((product) => product.slug !== slug);
        
        const shuffledProducts = [...filteredProducts].sort(() => Math.random() - 0.5);
        
        setSimilarProducts(shuffledProducts.slice(0, 3));
      })
      .catch((error) => console.error('Error fetching similar products:', error));
  }, [slug]);

  return (
    <section className="similar-products">
      <h3>Liknande produkter</h3>
      <div className="similar-product-grid">
        {similarProducts.map((similarProduct) => (
          <div className="similar-product-card" key={similarProduct.id}>
            <Link to={`/products/${similarProduct.slug}`} className="product-link">
              <img src={similarProduct.image} alt={similarProduct.name} className="small-product-image" />
              <div className="small-product-info">
                <h3 className="small-product-name">{similarProduct.name}</h3>
                <p className="small-product-price">{similarProduct.price} SEK</p>
              </div>
              <div className="brand">{similarProduct.brand}</div>
              </Link>
          </div>
        ))}
      </div>
    </section>
  );
};


SimilarProducts.propTypes = {
  slug: PropTypes.string.isRequired,
};

export default SimilarProducts;