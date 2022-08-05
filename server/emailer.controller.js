const nodemailer = require("nodemailer");

exports.SEND_EMAIL = (req, res) => {
  try {
    const { email, name, subject, message } = req.body;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const emailDetails = {
      from: email,
      to: process.env.EMAIL_USERNAME,
      subject,
      text: `From: ${email}, My name is ${name}.${message}`,
    };
    transporter.sendMail(emailDetails, (err, data) => {
      if (err) {
        return res.status(400).json({ errorMessage: "Failed to send email!" });
      } else {
        return res
          .status(200)
          .json({ successMessage: "Thank you for sending me an email!" });
      }
    });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ errorMessage: "We can't reach your email, try again!" });
  }
};
