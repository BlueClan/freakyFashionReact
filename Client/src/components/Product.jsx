import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../Styles/Home.css';

const Product = ({ slug }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details based on the slug
    fetch(`http://localhost:3000/api/products/${slug}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error fetching product:', error));
  }, [slug]);

  if (!product) {
    return <p>Loading...</p>; // Display a loading message while fetching data
  }

  return (
    <section className="product-details">
      <div className="product-card">
        <div className="product-image-container">
          <img src={product.image} alt={product.name} />
          <span className="icon-heart"><i className="bi bi-heart"></i></span>
        </div>
        <div className="product-info">
          <h2 className="product-name">{product.name}</h2>
          <p className="brand">{product.brand}</p>
          <p className="product-description">{product.description}</p>
          <p className="product-price">{product.price} SEK</p>
          <button className="add-to-cart-btn">Lägg i varukorgen</button>
        </div>
      </div>
    </section>
  );
};

// Prop validation for 'slug'
Product.propTypes = {
  slug: PropTypes.string.isRequired,
};

export default Product;