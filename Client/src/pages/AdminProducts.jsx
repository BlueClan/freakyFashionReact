import { useState, useEffect } from "react";
import AdminHeader from "../components/AdminHeader"; 
import SideBar from "../components/SideBar";       
import "../styles/admin.css";

const AdminProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
        document.title = "Administration";
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/products");
            if (!response.ok) {
                throw new Error("Något gick fel vid hämtning av produkter.");
            }
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error("Fel vid hämtning av produkter:", error);
        }
    };

    return (
        <div className="admin-container">
            <AdminHeader />
            <div className="admin-layout"> 
                <SideBar /> 
                <main>
                    <div className="top-section">
                        <h2>Produkter</h2>
                        <a href="/admin/products/new" className="new-product-button">Ny produkt</a>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Namn</th>
                                <th>SKU</th>
                                <th>Pris</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.length > 0 ? (
                                products.map((product) => (
                                    <tr key={product.id || product.sku}>
                                        <td>{product.name}</td>
                                        <td>{product.sku}</td>
                                        <td>{product.price} SEK</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="3">Inga produkter hittades.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </main>
            </div>
        </div>
    );
};

export default AdminProducts;