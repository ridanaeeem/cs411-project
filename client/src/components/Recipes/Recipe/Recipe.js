import React from "react";
import styled from "styled-components";

const RecipeCard = styled.div`
	border: 1px solid black;
	margin: 10px;
	padding: 10px;
`;

export function Recipe({ recipe, setCurrentId }) {
	// only want to display some of the description on the recipe cards
	let shortDescription = recipe.description;
	if (shortDescription.length > 10) {
		shortDescription = recipe.description.substring(0, 10) + "...";
	}

	console.log("creator" + recipe.creator);

	return (
		<RecipeCard>
			<h1>{recipe.title}</h1>
			<p>{recipe.creator}</p>
			<p>{shortDescription}</p>
			<button
				onClick={() => {
					setCurrentId(recipe._id);
				}}>
				update
			</button>
		</RecipeCard>
	);
}

export default Recipe;
