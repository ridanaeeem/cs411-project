import express, { application } from "express";
import mongoose from "mongoose";
import cors from "cors";
import recipeRoutes from "./routes/recipes.js";

// initialize app
const app = express();

// middleware
// every route inside of recipes will start with /recipes
app.use("/recipes", recipeRoutes);

// app.use(express.json({ limit: "30mb", extended: true }));
// app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

const ATLAS_URI = "mongodb+srv://ridan:Y5ZHDdzFSsvm9ph7@easierrecipe.vvqtsfg.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

// connect to mongo database
mongoose
	.connect(ATLAS_URI)
	// if connection is successful
	.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
	// if connection is unsuccessful
	.catch((error) => console.log(error.message));
