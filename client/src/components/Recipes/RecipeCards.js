import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux"; //allows us to fetch data from global redux store
import RecipeCard from "./Recipe/RecipeCard";
import { Link } from "react-router-dom";

const CardMap = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	align-items: stretch;
`;

const StyledLink = styled(Link)`
	width: 20%;
	text-decoration: none;
	color: black;
`;

export function RecipeCards({ setCurRecipe }) {
	const recipes = useSelector((state) => state.recipes);

	const recipeItems = recipes.map((recipe) => {
		const atIndex = recipe.creator.indexOf("@");
		const username = recipe.creator.slice(0, atIndex);
		const title = recipe.title.replace(/\s+/g, "-").toLowerCase();
		return (
			<StyledLink key={recipe._id} to={`/${username}/${title}`} onClick={() => setCurRecipe(recipe)}>
				<RecipeCard recipe={recipe} />
			</StyledLink>
		);
	});

	return !recipes.length ? <h1>No recipes yet!</h1> : <CardMap>{recipeItems}</CardMap>;
}

export default RecipeCards;
