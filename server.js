import express from "express";
import products from "./routes/products.js";
import notFound from "./middleware/notFound.js";
import errorHandler from "./middleware/error.js";
import { connectDB } from "./config/dbConnect.js";
const app = express();

const port = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/api/products", products);

// Error handling
app.use(notFound);
app.use(errorHandler);

// Connect to MongoDB and start server
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
  });
});
