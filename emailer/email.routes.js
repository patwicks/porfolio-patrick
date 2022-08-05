const router = require("express").Router();

const { SEND_MAIL } = require("./email.controller");

router.post("/email", SEND_MAIL);

module.exports = router;
