import express from "express";
// goals: crud operations for recipes
// import { getRecipes, createRecipe, updateRecipe, deleteRecipe } from "../controllers/recipes.js";
import { getRecipes, createRecipe } from "../controllers/recipes.js";

import login from "../middleware/login.js";

const router = express.Router();

router.get("/", login, getRecipes);
router.post("/", login, createRecipe);

export default router;
