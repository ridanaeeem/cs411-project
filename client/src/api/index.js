import axios from "axios"; // using axios to handle requests from frontend to backend/external APIS

// displays all the recipes that we currently have in the database
const url = "http://localhost:5000/recipes";

// get data from mongodb to frontend
export const fetchRecipes = () => axios.get(url);

// send data from frontend to mongodb
export const createRecipe = (newRecipe) => axios.post(url, newRecipe);

// works but not needed because i can just do it in Form.js
// get a recipe from a url
// export const fetchRecipeFromLink = async (recipeUrl) => {
// 	let config = {
// 		method: "get",
// 		maxBodyLength: Infinity,
// 		url: "https://recipe-scrape.vercel.app/api/scrape?url=https://www.onceuponachef.com/recipes/roast-beef-tenderloin-wine-sauce.html",
// 		headers: {},
// 	};

// 	console.log("api/index.js fetchRecipeFromLink");

// 	axios
// 		.request(config)
// 		.then((response) => {
// 			console.log("heres the data", JSON.stringify(response.data));
// 			return JSON.stringify(response.data);
// 		})
// 		.catch((error) => {
// 			console.log(error);
// 		});
// };
