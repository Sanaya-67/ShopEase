require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const productRoutes = require("./routes/productRoutes");

const app = express();

const PORT = process.env.PORT || 5000;

/* ================================
   MIDDLEWARE
================================ */

app.use(
    helmet({
        crossOriginResourcePolicy: false
    })
);

app.use(
    cors({
        origin: "http://127.0.0.1:5500"
    })
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api/products", productRoutes);

/* ================================
   BASIC ROUTES
================================ */

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Welcome to ShopEase API"
    });
});

app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        status: "OK",
        message: "ShopEase backend is running",
        timestamp: new Date().toISOString()
    });
});

/* ================================
   START SERVER
================================ */

app.listen(PORT, () => {
    console.log("");
    console.log("====================================");
    console.log("        SHOP EASE BACKEND");
    console.log("====================================");
    console.log(`Server running on port ${PORT}`);
    console.log(`API: http://localhost:${PORT}/api/health`);
    console.log("====================================");
    console.log("");
});