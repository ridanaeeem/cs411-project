import express from "express";
// goals: crud operations for recipes
// import { getRecipes, createRecipe, updateRecipe, deleteRecipe } from "../controllers/recipes.js";
import { getRecipes, createRecipe } from "../controllers/recipes.js";

const router = express.Router();

router.get("/", getRecipes);
router.post("/", createRecipe);

export default router;
