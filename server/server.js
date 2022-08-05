const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
// * Router file
const emailerRoute = require("./emailer.router");
// * initialize app
const app = express();
//* middlewares
dotenv.config();
app.use(cors());
app.use(express.json());

app.use("/api/v1/send", emailerRoute);

let port = process.env.PORT || 4000;
app.listen(port, () => console.log(`server is listening to port ${port}...`));
