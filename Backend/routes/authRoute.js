const express = require("express");
const controllers = require("../controllers/authController.js")

const router = express.Router();

router.post("/signup", controllers.signUpController); 
router.post("/login", controllers.loginController); 


module.exports = router;