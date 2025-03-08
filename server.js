import express from "express";
import mongoose from "mongoose";
import products from "./routes/products.js";
import notFound from "./middleware/notFound.js";
import errorHandler from "./middleware/error.js";
const app = express();

const port = process.env.PORT || 8000;
const db = process.env.CONNECTION_STRING;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/api/products", products);

// Error handling
app.use(notFound);
app.use(errorHandler);


// Connect to MongoDB
const connectDB = async () => {
    try {
      await mongoose.connect(db);
      console.log("MongoDB connected successfully");
    } catch (error) {
      console.error("MongoDB connection error:", error.message);
      process.exit(1);
    }
  };
  
  connectDB().then(() => {
    app.listen(port, () => {
      console.log(`🚀 Server running on http://localhost:${port}`);
    });
  });
  

