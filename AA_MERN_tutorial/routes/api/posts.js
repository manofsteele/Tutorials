const express = require("express");

let router = express.Router();
router.get("/test", (req, res) => res.send("working posts"));

module.exports = router;
