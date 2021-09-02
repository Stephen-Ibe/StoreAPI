const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/auth.controller");

const { register } = AuthController;

router.post("/signup", register);

module.exports = router;
