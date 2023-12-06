import axios from "axios"; // using axios to handle requests frmo frontend to backend/external APIS

// displays all the recipes that we currently have in the database
const url = "http://localhost:5000/recipes";

// get data from mongodb to frontend
export const fetchRecipes = () => axios.get(url);

// send data from frontend to mongodb
export const createRecipe = (newRecipe) => axios.post(url, newRecipe);

export const updateRecipe = (id, updatedRecipe) => axios.patch(`${url}/${id}`, updatedRecipe)
