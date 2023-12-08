import React from "react";
import styled from "styled-components";

const CardArea = styled.div`
	border: 1px solid black;
	margin: 10px;
	padding: 10px;
`;

export function RecipeCard({ recipe }) {
	// only want to display some of the description on the recipe cards
	let shortDescription = recipe.description;
	if (shortDescription.length > 10) {
		shortDescription = recipe.description.substring(0, 10) + "...";
	}

	return (
		<CardArea>
			<h1>{recipe.title}</h1>
			<p>{recipe.creator}</p>
			<p>{shortDescription}</p>
		</CardArea>
	);
}

export default RecipeCard;
