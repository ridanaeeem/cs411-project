import mongoose from "mongoose";

// create schema
// default number of likes is zero
// default date is current date
const recipeSchema = mongoose.Schema({
	title: String,
	creator: String,
	description: String,
	ingredients: [String],
	instructions: [String],
	tags: [String],
	recipePhoto: String,
	likes: {
		type: Number,
		default: 0,
	},
	postDate: {
		type: Date,
		default: new Date(),
	},
});

const RecipeMessage = mongoose.model("RecipeMessage", recipeSchema);

// export mongoose model to perform CRUD operations on
export default RecipeMessage;
