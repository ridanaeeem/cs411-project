import mongoose from "mongoose";

// create schema
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
	image: {
		type: String,
		default: "",
	},
	cookTime: {
		type: Number,
	},
	prepTime: {
		type: Number,
		default: 0,
	},
	totalTime: {
		type: Number,
		default: 0,
	},
	yield: {
		type: Number,
		default: 0,
	},
	cuisine: {
		type: [String],
		default: undefined,
	},
	category: {
		type: [String],
		default: undefined,
	},
});

const RecipeMessage = mongoose.model("RecipeMessage", recipeSchema);

// export mongoose model to perform CRUD operations on
export default RecipeMessage;
