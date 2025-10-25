import React from "react";
import { Typography, Card, CardContent, CardMedia, Divider, Box } from "@mui/material";
import { useParams, Link } from "react-router-dom";
import models from "../../modelData/models";
import "./styles.css";

function UserPhotos() {
  const { userId } = useParams();
  const photos = models.photoOfUserModel(userId);

  if (!photos || photos.length === 0) {
    return <Typography variant="body1">No photos found for this user.</Typography>;
  }

  return (
    <div className="user-photos-container">
      {photos.map((photo) => (
        <Card key={photo._id} sx={{ mb: 3, p: 2 }}>
          {/* Ảnh */}
          <CardMedia
            component="img"
            image={`images/${photo.file_name}`}
            alt="User photo"
            sx={{
              width: "100%",
              maxWidth: 600,
              borderRadius: 2,
              boxShadow: 2,
            }}
          />
          <CardContent>
            {/* Thời gian tạo ảnh */}
            <Typography variant="body2" color="textSecondary">
              Uploaded: {new Date(photo.date_time).toLocaleString()}
            </Typography>

            {/* Comment */}
            {photo.comments && photo.comments.length > 0 && (
              <Box sx={{ mt: 2 }}>
                <Divider sx={{ mb: 1 }} />
                <Typography variant="subtitle1">Comments:</Typography>
                {photo.comments.map((comment) => (
                  <Box key={comment._id} sx={{ mt: 1, mb: 1 }}>
                    <Typography variant="body2">
                      <strong>
                        <Link to={`/users/${comment.user._id}`}>
                          {comment.user.first_name} {comment.user.last_name}
                        </Link>
                      </strong>{" "}
                      ({new Date(comment.date_time).toLocaleString()}):
                    </Typography>
                    <Typography variant="body2">{comment.comment}</Typography>
                  </Box>
                ))}
              </Box>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default UserPhotos;
