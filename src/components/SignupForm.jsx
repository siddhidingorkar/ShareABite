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

const color = grey[900];

export default function SignupForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      fullname: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    // <ThemeProvider theme={defaultTheme}>
    <Container component="main" maxWidth="md" sx={{ mt: 15 }}>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5" sx={{ fontWeight: 700 }}>
          Register with us!
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <div>
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
            type="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="phone"
            type="phone"
            label="Phone Number"
            name="phone"
            autoComplete="email"
            autoFocus
            
          />
          </div>
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
              name="password"
              label="Confirm Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </div>
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
    </Container>
    // </ThemeProvider>
  );
}
