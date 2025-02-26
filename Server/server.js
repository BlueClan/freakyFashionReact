const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors()); // Allow requests from frontend
app.use(express.json());

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

//product detail page
app.get('/api/products/:slug', (req, res) => {
    const { slug } = req.params;
    db.get('SELECT * FROM products WHERE slug = ?', [slug], (err, product) => {
      if (err) {
        res.status(500).json({ error: 'Database error' });
        return;
      }
      if (!product) {
        res.status(404).json({ error: 'Product not found' });
        return;
      }
      res.json(product);
    });
  });

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

