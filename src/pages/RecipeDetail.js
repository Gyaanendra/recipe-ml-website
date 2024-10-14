// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getRecipeById } from "../api"; // Ensure this function exists to fetch recipe by ID
// import { Typography, Card, CardContent, CardMedia } from "@mui/material";

// const RecipeDetail = () => {
//   const { id } = useParams(); // Get the recipe ID from the URL
//   const [recipe, setRecipe] = useState(null);

//   useEffect(() => {
//     getRecipeById(id)
//       .then((response) => {
//         setRecipe(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching recipe details:", error);
//       });
//   }, [id]);

//   if (!recipe) return <Typography>Loading...</Typography>;

//   return (
//     <Card sx={{ maxWidth: 800, margin: "auto", marginTop: 4 }}>
//       <CardMedia
//         component="img"
//         image={recipe.image_src}
//         alt={recipe.TranslatedRecipeName}
//       />
//       <CardContent>
//         <Typography variant="h4" component="div" sx={{ fontWeight: "bold" }}>
//           {recipe.TranslatedRecipeName}
//         </Typography>
//         <Typography variant="body1" sx={{ marginBottom: 1 }}>
//           <strong>Ingredients:</strong> {recipe.TranslatedIngredients}
//         </Typography>
//         <Typography variant="body1">
//           <strong>Instructions:</strong> {recipe.TranslatedInstructions}
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// };

// export default RecipeDetail;
