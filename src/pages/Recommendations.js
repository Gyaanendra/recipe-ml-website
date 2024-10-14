import React, { useState } from "react";
import { getRecommendedRecipes } from "../api"; // Ensure this imports your API call function
import RecipeCard from "../components/RecipeCard"; // Adjust the path as needed
import { Button, TextField, Typography } from "@mui/material";

const Recommendations = () => {
  const [ingredients, setIngredients] = useState("");
  const [prepTime, setPrepTime] = useState(20);
  const [cookTime, setCookTime] = useState(50);
  const [recommendedRecipes, setRecommendedRecipes] = useState([]);

  const handleRecommend = () => {
    const ingredientList = ingredients
      .split(",")
      .map((ingredient) => ingredient.trim());
    getRecommendedRecipes(ingredientList, prepTime, cookTime)
      .then((response) => {
        setRecommendedRecipes(response.data); // Assuming response.data is an array of recipes
      })
      .catch((error) => {
        console.error("Error fetching recommendations:", error);
      });
  };

  return (
    <div>
      <Typography variant="h4" sx={{ marginBottom: 4 }}>
        {" "}
        {/* Added marginBottom here */}
        Get Recipe Recommendations
      </Typography>
      <TextField
        label="Enter ingredients (comma separated)"
        variant="outlined"
        fullWidth
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        sx={{ marginBottom: 2 }} // Space between input and button
      />
      <TextField
        label="Preparation Time"
        variant="outlined"
        type="number"
        value={prepTime}
        onChange={(e) => setPrepTime(e.target.value)}
        sx={{ marginBottom: 2, width: "48%", marginRight: 1 }} // Adjust width as needed
      />
      <TextField
        label="Cooking Time"
        variant="outlined"
        type="number"
        value={cookTime}
        onChange={(e) => setCookTime(e.target.value)}
        sx={{ marginBottom: 2, width: "48%" }} // Adjust width as needed
      />
      <Button variant="contained" onClick={handleRecommend}>
        Get Recommendations
      </Button>

      <div className="recipe-list" style={{ marginTop: 16 }}>
        {recommendedRecipes.length > 0 ? (
          recommendedRecipes.map((recipe) => (
            <RecipeCard key={recipe.unique_id} recipe={recipe} />
          ))
        ) : (
          <Typography>
            No recommendations available. Please try again.
          </Typography>
        )}
      </div>
    </div>
  );
};

export default Recommendations;
