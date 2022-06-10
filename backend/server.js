const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const PORT = process.env.PORT || 8080;

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

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
