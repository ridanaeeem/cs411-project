import React from "react";
import { useSelector } from "react-redux"; //allows us to fetch data from global redux store

import Recipe from "./Recipe/Recipe";
import { Link } from "react-router-dom";

export function Recipes() {
	const recipes = useSelector((state) => state.recipes);

	const recipeItems = recipes.map((recipe) => {
		const username = recipe.creator;
		const title = recipe.title.replace(/\s+/g, "-").toLowerCase();
		return (
			<Link key={recipe._id} to={`/${username}/${title}`}>
				<Recipe recipe={recipe} />
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

export default Recipes;
