import mongoose from "mongoose";

// create schema
const userSchema = mongoose.Schema({
	username: {
		type: String,
		default: "",
        required: true,
	},
	email: {
		type: String,
		default: "",
        required: true,
	},
	id: {
		type: String,
		default: "",
	},
});

const User = mongoose.model("User", recipeSchema);

// export mongoose model to perform CRUD operations on
export default User;
