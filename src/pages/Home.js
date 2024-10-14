import React, { useEffect, useState } from "react";
import { getAllRecipes } from "../api";
import RecipeCard from "../components/RecipeCard";

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getAllRecipes().then((response) => {
      setRecipes(response.data);
    });
  }, []);

  return (
    <div>
      <h1>All Recipes</h1>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.unique_id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Home;
