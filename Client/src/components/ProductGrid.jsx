// src/components/ProductGrid.jsx
import { Link } from "react-router-dom";
import '../Styles/Home.css';
import PropTypes from 'prop-types';

const ProductGrid = ({ products }) => {
  return (
    <section className="products">
      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="product-card" key={product.id}>
              <Link
                to={`/products/${product.slug}`}
                className="product-link"
                aria-label={`View details of ${product.name}`}
              >
                <div className="image-container">
                  <img
                    src={product.image}
                    alt={product.name}
                    title={`Image of ${product.name}`}
                  />
                  <span className="icon-heart">
                    <i className="bi bi-heart-fill"></i>
                  </span>
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-price">{product.price} SEK</p>
                </div>
                <div className="brand">{product.brand}</div>
              </Link>
            </div>
          ))
        ) : (
          <p>Inga produkter tillgängliga just nu.</p>
        )}
      </div>
    </section>
  );
};
// Prop validation for 'products' and its methods
ProductGrid.propTypes = {
    products: PropTypes.array.isRequired,  // Validate that 'products' is an array
    'products.length': PropTypes.number.isRequired,  // Validate that 'products.length' is a number
    'products.map': PropTypes.func.isRequired,  // Validate that 'products.map' is a function
  };
  

export default ProductGrid;
