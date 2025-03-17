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
                <div className="product-name-and-price">
                  <h3 className="product-name">{product.name} </h3>
                  <h3 className="product-price">{product.price} SEK</h3>
                </div>
                <p className="brand">{product.brand}</p>
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

// Correct prop validation
ProductGrid.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      brand: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProductGrid;
