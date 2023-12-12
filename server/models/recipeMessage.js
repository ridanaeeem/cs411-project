import mongoose from "mongoose";

// create schema
// default number of likes is zero
// default date is current date
const recipeSchema = mongoose.Schema({
	title: {
		type: String,
		default: "",
	},
	description: {
		type: String,
		default: "",
	},
	ingredients: {
		type: [String],
		default: undefined,
	},
	instructions: {
		type: [String],
		default: undefined,
	},
	tags: {
		type: [String],
		default: undefined,
	},
	recipePhoto: {
		type: String,
		default: "",
	},
	likes: {
		type: Number,
		default: 0,
	},
	postDate: {
		type: Date,
		default: new Date(),
	},
	creator: {
		type: String,
		default: "",
	},
	url: {
		type: String,
		default: "",
	},
});

const RecipeMessage = mongoose.model("RecipeMessage", recipeSchema);

// export mongoose model to perform CRUD operations on
export default RecipeMessage;
