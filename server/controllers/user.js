import jwt from "jsonwebtoken";
import User from "../models/user.js";
// import bcrypt from "bcrypt"; this is for hashing, maybe revisit to make more secure later

export const signin = async (req, res) => {
	// get email from frontend
	const { email } = req.body;

	try {
		// check if user exists in database by looking for email
		const existingUser = await User.findOne({ email });

		// if user doesn't exist, return error
		if (!existingUser) return res.status(404).json({ message: "User doesn't exist" });

		// if user exists
		const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, "test", { expiresIn: "1h" });
		res.status(200).json({ result: existingUser, token });
	} catch (error) {
		res.status(500).json({ message: "Something went wrong" });
	}
};

export const signup = async (req, res) => {
	const { email, username } = req.body;

	try {
		// check if user exists in database by looking for email
		const existingUser = await User.findOne({ email });

		// if user already exists, return error
		if (!existingUser) return res.status(404).json({ message: "User doesn't exist" });

		// if user doesn't exist, create user
		const result = await User.create({ email, username });
		const token = jwt.sign({ email: result.email, id: result._id }, "test", { expiresIn: "1h" });
		res.status(200).json({ result, token });
	} catch (error) {
		res.status(500).json({ message: "Something went wrong" });
	}
};
