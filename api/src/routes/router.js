const express = require("express");
const router = express.Router();

const verifier = (req, res) => {
    res.json("Back-end sucinto");
}

router.get("/", verifier);

module.exports = router;
