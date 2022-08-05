const router = require("express").Router();

const { SEND_MAIL, HELLO } = require("./email.controller");

router.post("/email", SEND_MAIL);
router.get("/hello", HELLO);

module.exports = router;
