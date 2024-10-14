import axios from "axios";

// Example base URL, replace it with your actual API base URL
const BASE_URL = "https://ml-recipe-api.onrender.com/api";

// Function to fetch all recipes (already existing)
export const getAllRecipes = async () => {
  const response = await axios.get(`${BASE_URL}/display_recipe`);
  return response;
};

// Function to get recommended recipes (already existing)
export const getRecommendedRecipes = async (
  ingredients,
  prepTime,
  cookTime
) => {
  const response = await axios.post(`${BASE_URL}/recommendation`, {
    user_ingredients: ingredients,
    user_prep_time: prepTime,
    user_cook_time: cookTime,
  });
  return response;
};

// Function to get recipe details by ID
// export const getRecipeById = async (id) => {
//   const response = await axios.get(`${BASE_URL}/display_recipe`);
//   // Assuming response.data is an array of recipes, filter to find the one with the matching ID
//   const recipe = response.data.find((recipe) => recipe.unique_id === id);

//   if (!recipe) {
//     throw new Error("Recipe not found");
//   }
//   return { data: recipe }; // Wrap it in an object to maintain consistency with your other API functions
// };
// Login and Signup functions (already existing)
export const loginUser = async (email, password) => {
  const response = await axios.post(`${BASE_URL}/login`, { email, password });
  return response;
};

export const signupUser = async (firstname, lastname, email, password) => {
  const response = await axios.post(`${BASE_URL}/signup`, {
    firstname,
    lastname,
    email,
    password,
  });
  return response;
};
