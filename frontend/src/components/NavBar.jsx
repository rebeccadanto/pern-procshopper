import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NavBar() {
  const { cart } = useSelector((state) => state.cart);
  const location = useLocation();
  const checkIfShow = () => {
    console.log(location.pathname);
    const notShow = ["/login", "/register", "/physician/login"];
    if (notShow.includes(location.pathname)) {
      return false;
    }

    return true;
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "#f44336" }}>
        <Toolbar>
          {/* {checkIfShow() && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )} */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Proc Shopper
          </Typography>
          {checkIfShow() && (
            <Button color="success" variant="contained">
              CART{" "}
              <span
                style={{
                  color: "crimson",
                  marginLeft:"10px",
                  fontSize:"16px"
                }}
              >
                {cart.length}
              </span>
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
