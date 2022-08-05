const router = require("express").Router();
const { SEND_EMAIL } = require("./emailer.controller");

router.post("/emailer", SEND_EMAIL);

module.exports = router;
