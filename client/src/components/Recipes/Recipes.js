import React from "react";
import { useSelector } from "react-redux"; //allows us to fetch data from global redux store

import Recipe from "./Recipe/Recipe";

export function Recipes({ setCurrentId }) {
	// returns all the recipes 
	const recipes = useSelector((state) => state.recipes);

	const recipeItems = recipes.map((recipe) => {
		return (
			<div key={recipe._id}>
				<Recipe recipe={recipe} setCurrentId={setCurrentId} />
			</div>
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
