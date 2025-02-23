const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.join(__dirname, "products.db");

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Error opening database:", err.message);
  } else {
    console.log("Connected to SQLite database.");

    db.serialize(() => {
      // Drop existing table to reset structure
      db.run(`DROP TABLE IF EXISTS products`, (err) => {
        if (err) console.error("Error dropping table:", err.message);
        else console.log("Old products table deleted.");
      });

      // Create new table with updated columns
      db.run(
        `CREATE TABLE products (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          description TEXT,
          image TEXT,
          sku TEXT UNIQUE NOT NULL,
          price REAL NOT NULL,
          brand TEXT,
          slug TEXT UNIQUE NOT NULL
        )`,
        (err) => {
          if (err) {
            console.error("Error creating table:", err.message);
          } else {
            console.log("Products table created successfully.");
          }
        }
      );
    });
  }
});

module.exports = db;
