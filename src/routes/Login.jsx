import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import LoginForm from "../components/LoginForm";
import React from "react";
import Navbar from "../components/Navbar";

export default function Login() {
  return (
    <div>
      <Navbar />
      <LoginForm />
    </div>
  );
}