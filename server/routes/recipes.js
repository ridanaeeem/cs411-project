import express from "express";
// import { getRecipes, createRecipe, updateRecipe, deleteRecipe } from "../controllers/recipes.js";
import { getRecipes, createRecipe, updateRecipe } from "../controllers/recipes.js";

const router = express.Router();

// CRUD operations
router.get("/", getRecipes);
router.post("/", createRecipe);
router.patch("/:id", updateRecipe); // dynamic, needs to know what recipe to update via the id

export default router;
