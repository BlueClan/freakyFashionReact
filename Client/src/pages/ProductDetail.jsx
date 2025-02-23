import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/ProductDetail.css";

const ProductDetail = () => {
    const { slug } = useParams();
    const [product, setProduct] = useState(null);
    const [similarProducts, setSimilarProducts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/api/products/${slug}`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data.product);
                setSimilarProducts(data.similarProducts);
            })
            .catch((error) => console.error("Error fetching product:", error));
    }, [slug]);

    if (!product) {
        return <p>Loading...</p>;
    }

    return (
        <div className="product-detail">
            <header className="header-container">
                <div className="logo">
                    <a href="/">
                        <img src="https://placehold.co/600x400/black/white?text=LOGO" alt="Freaky Fashion Logo" />
                    </a>
                </div>
            </header>

            <section className="product-details">
                <div className="product-card">
                    <div className="product-image-container">
                        <img src={product.image} alt={product.name} />
                        <span className="icon-heart">❤️</span>
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

            <section className="similar-products">
                <h3>Liknande produkter</h3>
                <div className="similar-product-grid">
                    {similarProducts.map((similarProduct) => (
                        <div key={similarProduct.id} className="similar-product-card">
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
        </div>
    );
};

export default ProductDetail;
