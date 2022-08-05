const nodemailer = require("nodemailer");

exports.SEND_MAIL = (req, res) => {
  try {
    // create a transpoter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    // mail options
    const mailInfo = {
      from: req.body.email,
      to: process.env.EMAIL_USER,
      subject: req.body.subject,
      text: `FROM: ${req.body.email}. My name is ${req.body.NAME}. ${req.body.message}`,
    };
    transporter.sendMail(mailInfo, (err, data) => {
      if (err) {
        return res.status(400).json({ errorMsg: "Failed to send email!" });
      } else {
        return res
          .status(200)
          .json({ success: "Thank you for sending an email!" });
      }
    });
  } catch (error) {
    return res
      .status(500)
      .json({ errorMsg: "We can't reach ypur email, try again!" });
  }
};

exports.HELLO = (req, res) => {
  res.send("Hello Everyone, I'm Dev Pat!");
};
