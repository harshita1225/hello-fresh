const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

// const cors = require("cors");

require("dotenv").config();

const dbConnect = require("./src/config/db");
dbConnect(); // connects to db

/* app.use(
  cors({
    origin: process.env.NODE_ENV === "production" ? "" : "localhost:4444",
    credential: true,
  })
); */

app.use(cookieParser());
app.use(express.json()); // needed to parse the body of the request
app.use("/users", require("./src/routes/userRoutes"));
app.use("/plans", require("./src/routes/planRoutes"));
app.get("/", (req, res) => {
  console.log("Hello from route");

  res.send("Hello from express");
});

// syntax app.use('path', express.static('storedpathofthefile'))
//app.use('/images', express.static('./server/uploads'))

const port = process.env.PORT || 4445;
app.listen(port, () => console.log("Server is up and running at port", port));
