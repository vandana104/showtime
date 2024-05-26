import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  Grid,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import titleImg from "../utils/film-interpretation.jpg";
import { Link } from "react-router-dom";
import Home from "./Home";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    if (username.trim() === "" || password.trim() === "") {
      alert("Please enter both username and password.");
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.name === username &&
      storedUser.password === password
    ) {
      setIsLoggedIn(true);
    } else {
      alert("Invalid Credentials");
    }
  };

  if (isLoggedIn) {
    return <Home/>;
  }

  return (
    <Box
      sx={{
        backgroundImage: `url(${titleImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container justifyContent="center" alignItems="center">
        <Grid item md={6}>
          <Box
            sx={{
              padding: "30px",
              backgroundColor: "rgba(255, 255, 255, 0.9)", 
              borderRadius: "10px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            <Typography variant="h4" gutterBottom>
              Sign in
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Username or Email"
              value={username}
              onChange={handleUsernameChange}
              sx={{ marginBottom: "20px" }}
            />
            <TextField
              fullWidth
              variant="outlined"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              InputProps={{
                endAdornment: (
                  <IconButton onClick={handleTogglePasswordVisibility}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                ),
              }}
              sx={{ marginBottom: "20px" }}
            />
            <Button
              fullWidth
              variant="contained"
              onClick={handleLogin}
              sx={{
                marginBottom: "20px",
                backgroundColor: "rgb(63, 63, 117)",
                color: "#ffffff",
              }}
            >
              Sign In
            </Button>
            <Typography variant="body2" gutterBottom>
              Don't have an account?{" "}
              <Link to="/signup" style={{ color: "#3f51b5" }}>
                Sign up
              </Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
