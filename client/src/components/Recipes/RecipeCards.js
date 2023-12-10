import React from "react";
import { useSelector } from "react-redux"; //allows us to fetch data from global redux store

import RecipeCard from "./Recipe/RecipeCard";
import { Link } from "react-router-dom";

export function RecipeCards({ setCurRecipe }) {
	const recipes = useSelector((state) => state.recipes);

	const recipeItems = recipes.map((recipe) => {
		const atIndex = recipe.creator.indexOf("@");
		const username = recipe.creator.slice(0, atIndex);
		const title = recipe.title.replace(/\s+/g, "-").toLowerCase();
		return (
			<Link key={recipe._id} to={`/${username}/${title}`} onClick={() => setCurRecipe(recipe)}>
				<RecipeCard recipe={recipe} />
			</Link>
		);
	});

	return !recipes.length ? (
		<h1>No recipes yet!</h1>
	) : (
		<>
			<h1>Recipes</h1>
			<div>{recipeItems}</div>
		</>
	);
}

export default RecipeCards;
