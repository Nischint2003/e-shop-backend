require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const morgain = require("morgan");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
const cloudinary = require("cloudinary");
const Stripe = require("stripe");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");

const app = express();

//PORT
PORT = process.env.PORT || 8000;

//cloudinary Config
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

//middleware
app.use(helmet());
app.use(mongoSanitize());
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

//database connection
connectDB();

//stripe configuration
exports.stripe = new Stripe(process.env.STRIPE_API_SECRET);

//Routes
app.use("/api/user", require("./routes/userRoutes")); //user
app.use("/api/product", require("./routes/productRoutes")); //products
app.use("/api/cat", require("./routes/categoryRoutes")); //category
app.use("/api/order", require("./routes/orderRoutes")); //order

app.listen(PORT, console.log(`App started at PORT ${PORT}`));
