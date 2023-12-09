import express, { application } from "express";
import mongoose from "mongoose";
import cors from "cors";
import recipeRoutes from "./routes/recipes.js";
import userRoutes from "./routes/users.js";
import dotenv from "dotenv";
dotenv.config({ path: "config.env" });

// initialize app
const app = express();
// CORS middleware to handle cross-origin requests
app.use(cors());
// parse JSON data
// express.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object
app.use(express.json());
// every route inside of recipes will start with /recipes
app.use("/recipes", recipeRoutes);
// same for users
app.use("/users", userRoutes);

// connect to mongo database
const ATLAS_URI = process.env.ATLAS_URI;
const PORT = process.env.PORT || 5000;

mongoose
	.connect(ATLAS_URI)
	// if connection is successful
	.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
	// if connection is unsuccessful
	.catch((error) => console.log(error.message));
