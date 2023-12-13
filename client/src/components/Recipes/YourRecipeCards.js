import React from "react";
import { useSelector } from "react-redux"; //allows us to fetch data from global redux store
import RecipeCard from "./Recipe/RecipeCard";
import StyledLink from "./RecipeCards";
import CardMap from "./RecipeCards";

export function YourRecipeCards({ setCurRecipe }) {
	const user = JSON.parse(localStorage.getItem("profile"));
	const email = user?.email;
	const recipes = useSelector((state) => state.recipes);

	const recipeItems = recipes
		.filter((recipe) => recipe.creator === email)
		.map((recipe) => {
			const atIndex = recipe.creator.indexOf("@");
			const username = recipe.creator.slice(0, atIndex);
			const title = recipe.title.replace(/\s+/g, "-").toLowerCase();
			return (
				<StyledLink key={recipe._id} to={`/${username}/${title}`} onClick={() => setCurRecipe(recipe)}>
					<RecipeCard recipe={recipe} />
				</StyledLink>
			);
		});

	return !recipes.filter((recipe) => recipe.creator === email).length ? (
		<h1>No recipes yet!</h1>
	) : (
		<CardMap>{recipeItems}</CardMap>
	);
}

export default YourRecipeCards;
