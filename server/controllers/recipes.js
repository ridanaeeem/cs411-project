import RecipeMessage from "../models/recipeMessage.js";

// all handlers for /recipes route

// getting a post
// asynchronous function because we are fetching data from the database
export const getRecipes = async (req, res) => {
	try {
		// get all the recipes from the database
		const recipeMessages = await RecipeMessage.find();
		// send the recipes as a response
		res.status(200).json(recipeMessages);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

// creating a post
// asynchronous function because we are saving data to the database
export const createRecipe = async (req, res) => {
	// req.body is the data sent by client to API (recipe data from form)
	const recipe = req.body;
	// create new recipe with data from client
	const newRecipe = new RecipeMessage({ ...recipe, creator: req.userId, createdAt: new Date().toISOString() });

	try {
		// save new recipe to database
		await newRecipe.save();
		console.log("Incoming Request Body:", req.body);
		console.log("Recipe created:", newRecipe);
		// send new recipe as a response
		res.status(201).json(newRecipe);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};
