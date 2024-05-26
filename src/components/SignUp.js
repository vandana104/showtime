import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  MenuItem,
  Link,
  IconButton,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const professions = ["Engineer", "Doctor", "Teacher", "Artist", "Other"];

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [profession, setProfession] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleProfessionChange = (event) => {
    setProfession(event.target.value);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const isFormValid = () => {
    return (
      name.trim() !== "" &&
      email.trim() !== "" &&
      phone.trim() !== "" &&
      password.trim() !== "" &&
      profession.trim() !== ""
    );
  };

  const handleSignUp = () => {
    if (!isFormValid()) {
      alert("Please fill out all fields.");
      return;
    }

    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
      alert(
        "Password must be at least 8 characters long and contain both letters and numbers.",
      );
      return;
    }

    // Navigate to the next page
    localStorage.setItem(
      "user",
      JSON.stringify({ name, email, phone, password, profession }),
    );
    navigate("/login");
  };

  <Button
    fullWidth
    variant="contained"
    sx={{
      marginTop: "20px",
      backgroundColor: "rgb(63, 63, 117)",
      color: "#ffffff",
    }}
    onClick={handleSignUp}>
    Sign Up
  </Button>;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background:
          "linear-gradient(232deg, rgba(2, 0, 36, 1) 0%, rgba(121, 9, 51, 1) 35%, rgba(0, 212, 255, 1) 100%)",
      }}>
      <Box
        sx={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          width: "calc(100% - 200px)",
          maxWidth: "400px",
        }}>
        <Typography variant="h4" align="center" gutterBottom>
          Sign Up
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Phone"
              value={phone}
              onChange={handlePhoneChange}
            />
          </Grid>
          <Grid item xs={12}>
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
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              fullWidth
              variant="outlined"
              label="Profession"
              value={profession}
              onChange={handleProfessionChange}>
              {professions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <Button
          fullWidth
          variant="contained"
          sx={{
            marginTop: "20px",
            backgroundColor: "rgb(63, 63, 117)",
            color: "#ffffff",
          }}
          onClick={handleSignUp}
          disabled={!isFormValid()}>
          Sign Up
        </Button>
        <Typography variant="body2" align="center" sx={{ marginTop: "10px" }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#3f3f75" }}>
            Sign In
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default SignUp;
