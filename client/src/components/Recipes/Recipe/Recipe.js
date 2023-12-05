import React from "react";

export function Recipe({ recipe }) {
	// only want to display some of the description on the recipe cards 
	let shortDescription = recipe.description;
	if (shortDescription.length > 10) {
		shortDescription = recipe.description.substring(0, 10) + "...";
	}

	return (
		<>
			<h1>{recipe.title}</h1>
			<h3>{recipe.description}</h3>
			<p>{shortDescription}</p>
		</>
	);
}

export default Recipe;
