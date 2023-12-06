const mongoose = require("mongoose");
const express = require("express");
const { User } = require('../models/userModel.js');
const jwt = require("jsonwebtoken");


const signUpController = async (req, res) => {
  console.log(req.body);
  try {
    const { name, email, password } = req.body;
    if ( !email || !password || password.length < 6) {
      return res.status(400).send({
        success: false,
        message: "Invalid input. Please provide valid name, email, and password (min 6 characters).",
      });
    }

    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).send({
        success: false,
        message: "Email is taken",
      });
    }


    const user = new User({
      name,
      email,
      password, 
    });

    await user.save();

    return res.status(201).send({
      success: true,
      message: "Registration successful",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      message: "Internal server error",
    });
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: "Invalid input. Please provide both email and password.",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).send({
        success: false,
        message: "Invalid credentials",
      });
    }

    if (password !== user.password) {
      return res.status(401).send({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Generate a dummy token for demonstration
    const token = jwt.sign({ userId: user._id }, 'qwertyuio', { expiresIn: '1h' });

    // At this point, the login is successful
    return res.status(200).send({
      success: true,
      message: "Login successful",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
      token, // Include the token in the response
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      message: "Internal server error",
    });
  }
};


module.exports = {signUpController,loginController}