import Header from "../components/Header";
import Hero from "../components/Hero";
import SpotGrid from "../components/SpotGrid";
import ProductGrid from "../components/ProductGrid";
import InfoGrid from "../components/InfoGrid";
import Footer from "../components/Footer";
import '../Styles/Home.css';
import PropTypes from 'prop-types';

const Home = ({ products }) => {
  return (
    <div>
      <Header />
      <Hero />
      <SpotGrid />
      <ProductGrid products={products} />
      <InfoGrid />
      <Footer />
    </div>
  );
};

// Prop validation for 'products'
Home.propTypes = {
  products: PropTypes.array.isRequired,
};

export default Home;

