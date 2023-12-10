import axios from "axios"; // using axios to handle requests frmo frontend to backend/external APIS

// displays all the recipes that we currently have in the database
// const url = "http://localhost:5000/recipes";

// will be storing more than just recipes now
const API = axios.create({ baseURL: "http://localhost:5000" });

// middleware to send token to backend
API.interceptors.request.use((req) => {
	if (localStorage.getItem("profile")) {
		// if user is logged in, send token to backend
		req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`;
	}
	return req;
});

// recipes
// get data from mongodb to frontend
export const fetchRecipes = () => API.get("/recipes");
// send data from frontend to mongodb
export const createRecipe = (newRecipe) => API.post("/recipes", newRecipe);

// oauth
export const signIn = (userData) => API.post("/user/signin", userData);
export const signUp = (userData) => API.post("/user/signup", userData);
