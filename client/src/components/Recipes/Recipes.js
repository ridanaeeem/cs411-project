import React from "react";
import { useSelector } from "react-redux"; //allows us to fetch data from global redux store

import Recipe from "./Recipe/Recipe";

const Recipes = () => {
	const recipes = useSelector((state) => state.recipes);

	const recipeItems = recipes.map((recipe) => {
		return (
			<li key={recipe._id}>
				<Recipe recipe={recipe} />
			</li>
		);
	});

	return !recipes.length ? (
		<h1>No recipes yet!</h1>
	) : (
		<>
			<h1>Recipes</h1>
			<ul>{recipeItems}</ul>
		</>
	);
};

export default Recipes;
