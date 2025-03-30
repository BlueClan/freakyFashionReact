import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../Styles/Home.css';

const SimilarProducts = ({ slug }) => {
  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    
    fetch('http://localhost:3000/api/products')
      .then((response) => response.json())
      .then((data) => {
        // Filter out the current product based on the slug
        const filteredProducts = data.filter((product) => product.slug !== slug);
        setSimilarProducts(filteredProducts.slice(0, 3)); 
      })
      .catch((error) => console.error('Error fetching similar products:', error));
  }, [slug]);

  return (
    <section className="similar-products">
      <h3>Liknande produkter</h3>
      <div className="similar-product-grid">
        {similarProducts.map((similarProduct) => (
          <div className="similar-product-card" key={similarProduct.id}>
            <a href={`/products/${similarProduct.slug}`} className="product-link">
              <img src={similarProduct.image} alt={similarProduct.name} className="small-product-image" />
              <div className="small-product-info">
                <h3 className="small-product-name">{similarProduct.name}</h3>
                <p className="small-product-price">{similarProduct.price} SEK</p>
              </div>
              <div className="brand">{similarProduct.brand}</div>
            </a>
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