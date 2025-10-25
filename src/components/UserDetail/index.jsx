import React from "react";
import { Typography, Link as MuiLink } from "@mui/material";
import { useParams, Link } from "react-router-dom";
import models from "../../modelData/models"; // đường dẫn đến file modelData/models.js
import "./styles.css";

function UserDetail() {
  const { userId } = useParams();
  const user = models.userModel(userId); // Lấy dữ liệu user từ model

  if (!user) {
    return <Typography variant="body1">User not found.</Typography>;
  }

  return (
    <div className="user-detail-container">
      <Typography variant="h5">
        {user.first_name} {user.last_name}
      </Typography>
      <Typography variant="body1">
        <strong>Occupation:</strong> {user.occupation}
      </Typography>
      <Typography variant="body1">
        <strong>Location:</strong> {user.location}
      </Typography>
      <Typography variant="body1">
        <strong>Description:</strong> {user.description}
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        <MuiLink component={Link} to={`/photos/${userId}`}>
          View Photos
        </MuiLink>
      </Typography>
    </div>
  );
}

export default UserDetail;
