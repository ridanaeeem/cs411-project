import React, { useEffect } from "react";
import Recipes from "../Recipes/RecipeCards";
import Form from "../Form/Form";
import { useDispatch } from "react-redux";
import { getRecipes } from "../../actions/recipes";
import { Login } from "../Login";

export function About() {
	// dispatch an action (getRecipes) to the redux store
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getRecipes());
	}, [dispatch]);

	return (
		<>
			<h1>about page</h1>
			<div></div>
		</>
	);
}
