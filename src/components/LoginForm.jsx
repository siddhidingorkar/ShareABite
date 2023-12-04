import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { grey } from "@mui/material/colors";
import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';



// ... (existing imports)
const axiosInstance = axios.create({
  withCredentials: true,
});

// Example 2: Set withCredentials for all requests
axios.defaults.withCredentials = true;
const color = grey[900];

export default function LoginForm() {

  const navigate = useNavigate();


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:4000/api/login", {
        email: event.target.email.value,
        password: event.target.password.value,
      });
  
      console.log(res.data.user);
  
      if (res.status === 200) {
        // Assuming your API returns a status code of 200 for successful login
        toast.success("Login successful");
        localStorage.setItem('user', JSON.stringify(res.data.user));
        navigate('/');
        
        console.log("Login successful!");
      } else {
        console.log("Login failed");
        // Handle other status codes or error scenarios if needed
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  // ... (existing code)

  return (
    // <ThemeProvider theme={defaultTheme}>
    <Container component="main" maxWidth="md" sx={{ mt: 25 }}>
      <CssBaseline />
      <Box
      sx={{
      width: "600px",
      height: "500px",
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
        <Avatar sx={{ m: 1, bgcolor: "P-900" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ fontWeight: 900, color:"black" }}>
          Log In
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            type="email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
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
            Log In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="#" variant="body2" sx={{ color: "Black",mr:2,fontWeight: 700}}>
                Forgot password?
              </Link>

            </Grid>

            <Grid item>
             <Link href="/signup" variant="body2" sx={{ color: "Black", fontWeight: 700 }}>
                  {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      </Box>
    </Container>
    // </ThemeProvider>
  );
}
