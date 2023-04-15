// const express = require("express");
// const app = express();
// const cookieParser = require("cookie-parser");
// const fileUpload = require("express-fileupload");

// const errorMiddleware=require("./middleware/error")

// app.use(express.json());
// app.use(cookieParser());
// // app.use(express.static(__dirname + 'public'));
// // app.use("/public/css",express.static('css'));
// // app.use("/public",express.static('public/css'));
// // app.use("/public",express.static('public/img'));

// //Router import
// const product = require("./routes/productRoute");
// const user = require("./routes/userRoute");
// const order = require("./routes/orderRoute");

// // app.use("/", (req, res) => {
// //     res.sendFile(__dirname + '/public/index.html');
// // })
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "file:///C:/Users/aashish/Desktop/webdevelpment/My%20project/index.html");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

// app.use("/api/v1", product);
// app.use("/api/v1", user);
// app.use("/api/v1", order);

// //Middleware forErrors
// app.use(errorMiddleware);


 
// module.exports = app;


const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");

const errorMiddleware = require("./middleware/error");

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

// Route Imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");
const payment = require("./routes/paymentRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;