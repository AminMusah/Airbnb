const express = require("express");
const cors = require("cors");

require("../db/connect");

const authRoute = require("../routes/auth");
const productRoute = require("../routes/product");

const app = express();

app.use(cors());

//send json data
app.use(express.json());

//routes
app.use("/api/", authRoute);
app.use("/api/", productRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`listening on port ${PORT}`));
