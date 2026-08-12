const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const productsRoutes = require("./routes/productsRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/products", productsRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "E-Commerce API is running!"
    });
});

const PORT = 5000;

mongoose
    .connect("mongodb://127.0.0.1:27017/ecommerce_store")
    .then(() => {
        console.log("MongoDB connected");
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.log("MongoDB connection error:", error.message);
    });