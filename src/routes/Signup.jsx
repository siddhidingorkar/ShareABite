import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import LoginForm from "../components/LoginForm";
import React from "react";
import Navbar from "../components/Navbar";
import SignupForm from "../components/SignupForm";
function SignUp() {
  return (
    <div>
      <Navbar />
      <SignupForm />
    </div>
  );
}
export default SignUp;
