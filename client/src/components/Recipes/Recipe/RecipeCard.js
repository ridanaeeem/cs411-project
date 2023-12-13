import React from "react";
import styled from "styled-components";
import default1 from "../../../images/default1.svg";

const CardArea = styled.div`
	border: 1px solid white;
	margin-right: 15%;
	padding: 10%;
	background-color: white;
	width: 100%;
	height: 100%;
`;

const Title = styled.div`
	font-size: calc(1rem + 10px);
`;

export function RecipeCard({ recipe }) {
	// only want to display some of the description on the recipe cards
	let shortDescription = recipe.description;
	if (shortDescription.length > 100) {
		shortDescription = recipe.description.substring(0, 100) + "...";
	}

	return (
		<CardArea>
			{recipe.image ? (
				<img src={recipe.image} alt={recipe.title} width="100%" />
			) : (
				<img src={default1} alt="default" width="100%" />
			)}
			<Title>{recipe.title}</Title>
			<p>{shortDescription}</p>
		</CardArea>
	);
}

export default RecipeCard;
