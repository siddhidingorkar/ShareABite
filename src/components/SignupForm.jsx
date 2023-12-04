import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { grey } from "@mui/material/colors";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';



const color = grey[900];

export default function SignupForm() {

  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const formData = {
      name: data.get("fullname"),
      email: data.get("email"),
      password: data.get("password"),
    };

    try {
      const res = await axios.post(
        "http://127.0.0.1:4000/api/signup",
        formData
      );
      if(res.data.success){
        toast.success("Sign up success Full")
        navigate('/login');
        
        console.log(res.data.success);
      }else{
        console.log(res)
        return;
      }

    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <Container component="main" maxWidth="md" sx={{ mt: 25 }}>
      <CssBaseline />
      <Box
      sx={{
      width: "600px",
      height: "600px",
      color:"white",
      marginTop: 18,
      marginLeft:17,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.05)", // Black background with 0.5 opacity
      borderRadius: "8px", // Optional: Add border radius for rounded corners
      padding: "20px", // Optional: Add padding for better spacing
    }}
    >
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5" sx={{ fontWeight: 900, color:"black" }}>
          Register with us!
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="sm"
            required
            fullWidth
            id="fullname"
            type="fullname"
            label="Full Name"
            name="fullname"
            autoComplete="name"
            autoFocus
          />

          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            type="email"
            autoComplete="email"
          />

          <TextField
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Phone Number"
            name="phone"
          />

          <div style={{ display: "flex" }}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              sx={{ pr: 1 }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              autoComplete="current-password"
            />
          </div>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: "black",
              height: 50,
              fontWeight: 700,
              ":hover": { backgroundColor: "#ffffff", color: "#000000" },
            }}
          >
            Sign Up
          </Button>

          <Grid container>
            <Grid item>
              <Link sx={{ color: "black" }} href="/login" variant="body2">
                Go to Log In
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      </Box>
    </Container>
  );
}
