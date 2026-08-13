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

const PORT = process.env.PORT || 5000;

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("MongoDB connected");
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.log("MongoDB connection error:", error.message);
    });
