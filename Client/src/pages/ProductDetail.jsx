import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import InfoGrid from '../components/InfoGrid';
import Product from '../components/Product';
import SimilarProducts from '../components/SimilarProducts';
import '../Styles/ProductDetail.css';

const ProductDetail = () => {
  const { slug } = useParams(); // Get the product slug from the URL

  return (
    <div>
      <Header />
      <Product slug={slug} />
      <SimilarProducts slug={slug} />
      <InfoGrid />
      <Footer />
    </div>
  );
};

export default ProductDetail;