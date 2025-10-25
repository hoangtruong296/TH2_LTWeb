import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import models from "../../modelData/models";
import "./styles.css";

function TopBar() {
  const location = useLocation();
  const { userId } = useParams();

  let rightText = "";

  if (location.pathname.startsWith("/users/") && userId) {
    const user = models.userModel(userId);
    if (user) {
      rightText = `${user.first_name} ${user.last_name}`;
    }
  } else if (location.pathname.startsWith("/photos/") && userId) {
    const user = models.userModel(userId);
    if (user) {
      rightText = `Photos of ${user.first_name} ${user.last_name}`;
    }
  } else if (location.pathname === "/users") {
    rightText = "User List";
  }

  return (
    <AppBar className="topbar-appBar" position="absolute">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        
        <Typography variant="h6" color="inherit">
          Hoàng
        </Typography>

        <Typography variant="h6" color="inherit">
          {rightText}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
