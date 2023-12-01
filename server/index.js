import express, { application } from "express";
import mongoose from "mongoose";
import cors from "cors";
import recipeRoutes from "./routes/recipes.js";
import dotenv from "dotenv";
dotenv.config({ path: "config.env" });

// initialize app
const app = express();

app.use(cors());
// middleware
// every route inside of recipes will start with /recipes
app.use("/recipes", recipeRoutes);


const ATLAS_URI = process.env.ATLAS_URI;
const PORT = process.env.PORT || 5000;

// connect to mongo database
mongoose
	.connect(ATLAS_URI)
	// if connection is successful
	.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
	// if connection is unsuccessful
	.catch((error) => console.log(error.message));
