const express = require("express");
const app = express(); //express app
const mongoose = require("mongoose");
const authroutes = require("./routes/authroute");
const productroutes = require("./routes/productroute");
const diseaseroutes = require("./routes/diseaseroute");
const adminroutes = require("./routes/adminroute");

const cors = require("cors");
require("dotenv").config();
app.use(cors());
const PORT = process.env.PORT || 4001;
// url to connect mongodb
const link = `mongodb+srv://${process.env.PASSWORD}:mongodb2002@cluster0.8et7m.mongodb.net/${process.env.DATABASENAME}`;
mongoose
  .connect(`${link}`, { useNewUrlParser: true, useUnifiedTopology: true }) // to avoid warning
  .then(() => {
    console.log("success");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // listen for request
  })
  .catch((err) => console.log(err));

app.use(express.urlencoded({ extended: false })); // parsing form data
app.use(express.json()); // parsing json data

app.use(authroutes);
app.use("/disease", diseaseroutes);
app.use("/productlist", productroutes);
app.use(adminroutes);
