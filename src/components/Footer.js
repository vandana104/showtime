import React from "react";
import {
  Box,
  Container,
  Grid,
  Link,
  Typography,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        color: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.text.primary
            : theme.palette.text.secondary,
      }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="inherit" gutterBottom>
              ShowTime
            </Typography>
            <Typography variant="body2" color="inherit">
              © {new Date().getFullYear()} Showtime. All rights reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="inherit" gutterBottom>
              Quick Links
            </Typography>
            <Box display="flex" justifyContent="space-around">
              {" "}
              <Link
                href="/"
                variant="body2"
                color="inherit"
                display="block"
                sx={{ mb: 1 }}>
                Home
              </Link>
              <Link
                href="/"
                variant="body2"
                color="inherit"
                display="block"
                sx={{ mb: 1 }}>
                About
              </Link>
              <Link href="/" variant="body2" color="inherit" display="block">
                Contact
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="inherit" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <IconButton
                aria-label="Facebook"
                color="inherit"
                href="https://www.facebook.com">
                <FacebookIcon />
              </IconButton>
              <IconButton
                aria-label="Twitter"
                color="inherit"
                href="https://www.twitter.com">
                <TwitterIcon />
              </IconButton>
              <IconButton
                aria-label="Instagram"
                color="inherit"
                href="https://www.instagram.com">
                <InstagramIcon />
              </IconButton>
              <IconButton
                aria-label="LinkedIn"
                color="inherit"
                href="https://www.linkedin.com">
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
