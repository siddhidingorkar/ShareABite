const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const route = require("./routes/authRoute.js");
const db = require("./config/db.js");

// connect to database
db();

const app = express();

//middleware
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api", route);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the server",
  });
});

const port = 4000;

app.listen(port, (err) => {
  if (err) {
    return console.log(`Error: ${err.message}`);
  }
  console.log(`Server is running on port ${port}`);
});
