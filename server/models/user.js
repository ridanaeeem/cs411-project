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
	likes: {
		type: [String],
		default: undefined,
	},
});

const User = mongoose.model("Users", userSchema);

// export mongoose model to perform CRUD operations on
export default User;
