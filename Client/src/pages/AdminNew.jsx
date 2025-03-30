import { useState, useEffect } from "react"; // Add useEffect
import { useNavigate } from "react-router-dom";
import AdminHeader from "../components/AdminHeader"; // Import new component
import SideBar from "../components/SideBar";       // Import new component
import "../styles/admin.css";

const AdminNew = () => {
    const [formData, setFormData] = useState({
        name: "",
        sku: "",
        price: "",
        image: "",
        description: "",
        brand: "",
    });

    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Administration";
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:3000/api/products", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Produkten har lagts till!");
                navigate("/admin/products");
            } else {
                const error = await response.json();
                alert("Ett fel uppstod: " + error.message);
            }
        } catch (error) {
            console.error("Fetch error:", error);
            alert("Ett nätverksfel uppstod.");
        }
    };

    return (
        <div className="admin-container">
            <AdminHeader /> 
            <div className="admin-layout"> 
                <SideBar /> 
                <main>
                    <div className="top-section">
                        <h2>Ny produkt</h2>
                    </div>
                    <form id="new-product-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Namn:</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Beskrivning:</label>
                            <textarea id="description" name="description" value={formData.description} onChange={handleChange}></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="image">Bild URL:</label>
                            <input type="text" id="image" name="image" value={formData.image} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="brand">Märke:</label>
                            <input type="text" id="brand" name="brand" value={formData.brand} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="sku">SKU:</label>
                            <input type="text" id="sku" name="sku" value={formData.sku} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Pris:</label>
                            <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} required />
                        </div>
                        <button className="add-product-button" type="submit">Lägg till</button>
                    </form>
                </main>
            </div>
        </div>
    );
};

export default AdminNew;