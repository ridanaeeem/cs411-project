import axios from 'axios'; // using axios to handle requests frmo frontend to backend/external APIS 

// displays all the recipes that we currently have in the database
const url = "http://localhost:5000/recipes";

// get data from mongodb to frontend
export const fetchRecipes = () => axios.get(url);