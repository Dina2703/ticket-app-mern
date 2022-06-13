const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 8080;

//Connect to database
connectDB();

const app = express();

//middlewares to get data from the body (req.body) otherwise we.ll get 'underfined'
app.use(express.json()); //it allows us to send json
app.use(express.urlencoded({ extended: false })); //to accept the form of the URL encoded form

//create a route with Express
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the Support Desk API." });
});

//Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/tickets", require("./routes/ticketRoutes"));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
