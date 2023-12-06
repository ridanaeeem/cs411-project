import mongoose from "mongoose";
import RecipeMessage from "../models/recipeMessage.js";

// all handlers for /recipes route
// asynchronous function because we are getching/saving data to the database

// getting a recipe
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

// creating a recipe
export const createRecipe = async (req, res) => {
	// req.body is the data sent by client to API (recipe data from form)
	const recipe = req.body;
	// create new recipe with data from client
	const newRecipe = new RecipeMessage(recipe);

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

//updating a recipe
export const updateRecipe = async (req, res) => {
	// the request is made like recipes/id, and the id is stored in mongo as _id
	const { id: _id } = req.params;
	// backend receives the recipe from frontend
	const recipe = req.body;
	// check to make sure the id actually exists
	if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("There is no recipe with that id");

	// if the id does exist, update
	// need to do new: true because by default the document is returned pre-update, this returns post-update
	const updatedRecipe = await RecipeMessage.findByIdAndUpdate(_id, recipe, { new: true });
	res.json(updatedRecipe);
};
