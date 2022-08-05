const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
// * initialize app
const app = express();
//* middlewares
dotenv.config();
app.use(cors());
app.use(express.json());

let port = process.env.PORT || 4000;

app.post("/v1/api/mailer", (req, res) => {
  try {
    const { name, subject, email, message } = req.body;
    //* create a transforter for nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    //* Create email details / options
    const emailDetails = {
      from: email,
      to: process.env.EMAIL_USERNAME,
      subject,
      text: `From: ${email}, My name is ${name}.${message}`,
    };

    transporter.sendMail(emailDetails, (err, data) => {
      if (err) {
        console.error(err.message);
        return res.status(400).json({ errorMessage: "Failed to send email!" });
      } else {
        return res
          .status(200)
          .json({ successMessage: "Email send successfully!" });
      }
    });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ errorMessage: "We can't reach your email, try again!" });
  }
});

app.listen(port, () => console.log(`server is listening to port ${port}...`));
