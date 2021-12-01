import { Box, Paper, Avatar, Typography, List } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { logoutAction } from "../redux/actions/users";
import { CustomButton } from "./commons";

const Sidebar = () => {
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  return (
    <Box sx={{ background: "#fff" }}>
      <Paper
        elevation={0}
        sx={{ padding: "20px", borderBottom: "2px solid #eee" }}
      >
        <Avatar
          alt="Remy Sharp"
          src="data:image/jpeg;base64,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"
          sx={{ width: 60, height: 60 }}
        />
        <h4 style={{ margin: "20px 0px 5px" }}>
          {user?.firstname} {user?.lastname}
        </h4>
        <Typography variant="subtitle2" component="p">
          {user?.email}
        </Typography>
      </Paper>
      <List component="nav" aria-label="secondary mailbox folder">
        <MyLink to="/">Home</MyLink>
        <MyLink to="/scans">My Scans</MyLink>
        {user.role === "physician" && (
          <MyLink to="/physician/scans">Scans Transactions</MyLink>
        )}
        <MyLink to="/cart">Cart</MyLink>
      </List>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
      >
        <CustomButton onClick={() => dispatch(logoutAction())}>
          Logout
        </CustomButton>
      </Box>
    </Box>
  );
};

const MyLink = styled(Link)(({ theme }) => ({
  margin: 0,
  fontFamily: `"Roboto","Helvetica","Arial",sans-serif`,
  fontWeight: 400,
  fontSize: "1rem",
  lineHeight: 1.5,
  letterSpacing: "0.00938em",
  display: "block",
  color: "#000",
  textDecoration: "none",
  padding: "10px 20px",
  "&:hover": {
    background: "#eee",
  },
}));

export default Sidebar;
