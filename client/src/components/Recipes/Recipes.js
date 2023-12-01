import React from "react";
import { useSelector } from "react-redux"; //allows us to fetch data from global redux store

import Recipe from "./Recipe/Recipe";

const Recipes = () => {
	const recipes = useSelector((state) => state.recipes);

	console.log(recipes);

	return (
		<>
			<h1>Recipes</h1>
			<Recipe />
			<Recipe />
		</>
	);
};

export default Recipes;
