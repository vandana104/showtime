import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Popover,
  Paper,
  List,
  ListItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Box width="100%" sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#790d15" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "inherit",
                marginRight: "90%",
              }}>
              ShowTime
            </Link>
          </Typography>
          <Button color="inherit" onClick={handleMenuClick}>
            Company Info
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}>
            <Paper>
              <List>
                <ListItem>Company: Geeksynergy Technologies Pvt Ltd</ListItem>
                <ListItem>Address: Sanjayanagar, Bengaluru-56</ListItem>
                <ListItem>
                  Phone:{" "}
                  <a
                    href="tel:XXXXXXXXX09"
                    style={{
                      textDecoration: "none",
                      color: "blue",
                      cursor: "pointer",
                    }}>
                    XXXXXXXXX09
                  </a>
                </ListItem>
                <ListItem>
                  Email:{" "}
                  <a
                    href="mailto:XXXXXX@gmail.com"
                    style={{
                      textDecoration: "none",
                      color: "blue",
                      cursor: "pointer",
                    }}>
                    XXXXXX@gmail.com
                  </a>
                </ListItem>
              </List>
            </Paper>
          </Popover>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
