const express = require("express");
const app = express(); //express app
require("dotenv").config();
const mongoose = require("mongoose");
const authroutes = require("./routes/authroute");
const productroutes = require("./routes/productroute");
const diseaseroutes = require("./routes/diseaseroute");
const adminroutes = require("./routes/adminroute");
const paymentroutes = require("./routes/paymentroute");
const orderroutes = require("./routes/orderroute");
const morgan = require("morgan");
const cors = require("cors");
app.use(cors());
app.use(morgan("dev"));
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

app.use(express.urlencoded({ extended: true })); // parsing form data
app.use(express.json()); // parsing json data

app.use(authroutes);
app.use("/disease", diseaseroutes);
app.use("/productlist", productroutes);
app.use(adminroutes);
app.use(paymentroutes);
app.use(orderroutes);
