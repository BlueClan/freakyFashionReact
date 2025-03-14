const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const slugify = require("slugify"); // Import slugify at the top

const app = express();
const PORT = 3000;

app.use(cors()); // Allow requests from frontend
app.use(express.json()); // Parse JSON request bodies

const db = new sqlite3.Database("./database/products.db");

// Get all products
app.get("/api/products", (req, res) => {
    db.all("SELECT * FROM products", [], (err, products) => {
        if (err) {
            res.status(500).json({ error: "Database error" });
            return;
        }
        res.json(products);
    });
});

// Product detail page
app.get("/api/products/:slug", (req, res) => {
    const { slug } = req.params;
    db.get("SELECT * FROM products WHERE slug = ?", [slug], (err, product) => {
        if (err) {
            res.status(500).json({ error: "Database error" });
            return;
        }
        if (!product) {
            res.status(404).json({ error: "Product not found" });
            return;
        }
        res.json(product);
    });
});

// Add a new product
app.post("/api/products", (req, res) => {
    const { name, sku, price, image, description, brand } = req.body;

    // Validate required fields
    if (!name || !sku || !price) {
        return res.status(400).json({ error: "Name, SKU, and Price are required" });
    }

    // Generate a slug from the product name
    const slug = slugify(name, { lower: true, strict: true });

    // Insert the new product into the database
    const sql = `
        INSERT INTO products (name, sku, price, image, description, brand, slug)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    const params = [name, sku, price, image, description, brand, slug];

    db.run(sql, params, function (err) {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Failed to add product to database" });
        }

        // Return the newly added product (with its ID)
        const newProduct = {
            id: this.lastID, // SQLite provides the last inserted row ID
            name,
            sku,
            price,
            image,
            description,
            brand,
            slug,
        };
        res.status(201).json(newProduct);
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});