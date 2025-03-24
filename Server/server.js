// Server/server.js
const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const slugify = require("slugify");

const app = express();
app.use(cors());
app.use(express.json());

const db = new sqlite3.Database("./database/products.db");

app.get("/api/products", (req, res) => {
  db.all("SELECT * FROM products", (err, products) => {
    if (err) {
      return res.status(500).json({ error: "Database error" });
    }
    res.json(products);
  });
});

app.get("/api/products/search", (req, res) => {
  const query = req.query.q;
  if (!query) {
    return res.status(400).json({ error: "Search query required" });
  }
  const searchTerm = `%${query.toLowerCase()}%`;
  db.all(
    "SELECT * FROM products WHERE LOWER(name) LIKE ?",
    [searchTerm],
    (err, products) => {
      if (err) {
        console.error("Database error during search:", err.message);
        return res.status(500).json({ error: "Database error" });
      }
      res.json(products || []);
    }
  );
});

app.get("/api/products/:slug", (req, res) => {
  const { slug } = req.params;
  db.get("SELECT * FROM products WHERE slug = ?", [slug], (err, product) => {
    if (err) {
      return res.status(500).json({ error: "Database error" });
    }
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
  });
});

app.post("/api/products", (req, res) => {
  const { name, sku, price, image, description, brand } = req.body;
  if (!name || !sku || !price) {
    return res.status(400).json({ error: "Name, SKU, and price are required" });
  }
  const slug = slugify(name, { lower: true });
  db.run(
    "INSERT INTO products (name, sku, price, image, description, brand, slug) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [name, sku, price, image, description, brand, slug],
    function (err) {
      if (err) {
        return res.status(500).json({ error: "Database error" });
      }
      res.status(201).json({ id: this.lastID, slug });
    }
  );
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});