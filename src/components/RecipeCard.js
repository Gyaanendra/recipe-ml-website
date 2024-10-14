import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

const RecipeCard = ({ recipe }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card
        onClick={handleClickOpen} // Open the modal on card click
        sx={{
          display: "flex",
          margin: 2,
          width: "100%",
          maxWidth: 800,
          boxShadow: 3,
          borderRadius: 2,
          "&:hover": {
            boxShadow: 6,
            transform: "scale(1.02)",
            transition: "transform 0.2s ease-in-out",
          },
          cursor: "pointer", // Change cursor to pointer to indicate it's clickable
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: "52%", objectFit: "cover", borderRadius: "4px 0 0 4px" }} // Rounded corners for image
          image={recipe.image_src}
          alt={recipe.TranslatedRecipeName}
        />
        <CardContent sx={{ flex: 1, padding: 3 }}>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontWeight: "bold", marginBottom: 1 }}
          >
            {recipe.TranslatedRecipeName}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginBottom: 0.5 }}
          >
            <strong>Cuisine:</strong> {recipe.Cuisine}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginBottom: 0.5 }}
          >
            <strong>Course:</strong> {recipe.Course}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginBottom: 0.5 }}
          >
            <strong>Cook Time:</strong> {recipe.CookTimeInMins} mins
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginBottom: 0.5 }}
          >
            <strong>Servings:</strong> {recipe.Servings}
          </Typography>
        </CardContent>
      </Card>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Work in Progress</DialogTitle>
        <DialogContent>
          <Typography>
            This feature is currently under development. Please check back
            later!
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default RecipeCard;
