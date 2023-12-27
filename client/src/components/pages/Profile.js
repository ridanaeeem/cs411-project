import React, { useEffect } from "react";
import YourRecipeCards from "../Recipes/YourRecipeCards";
import { useDispatch } from "react-redux";
import { getRecipes } from "../../actions/recipes";
import { FullPage } from "./Home";
import { Subheading } from "./Dashboard";
import { Tagline } from "./Dashboard";

export function Profile({ setCurRecipe }) {
	// dispatch an action to the redux store
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getRecipes());
	}, [dispatch]);

	const user = JSON.parse(localStorage.getItem("profile"));
	const email = user?.email;

	return (
		<FullPage>
			<Subheading>
				<Tagline>Welcome to your online cookbook!</Tagline>
			</Subheading>
			<YourRecipeCards setCurRecipe={setCurRecipe}></YourRecipeCards>
			<div></div>
		</FullPage>
	);
}
