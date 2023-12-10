import React, { useEffect } from "react";
import YourRecipeCards from "../Recipes/YourRecipeCards";
import { useDispatch } from "react-redux";
import { getRecipes } from "../../actions/recipes";
import { Login } from "../Login";

export function Profile() {
	// dispatch an action to the redux store
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getRecipes());
	}, [dispatch]);

	const user = JSON.parse(localStorage.getItem("profile"));
	const email = user?.email;

	return (
		<>
			<h1>welcome to your online cookbook {user?.username}!</h1>
			<YourRecipeCards></YourRecipeCards>
			<div></div>
		</>
	);
}
