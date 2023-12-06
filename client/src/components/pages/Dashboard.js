import React, { useEffect } from "react";
import Recipes from "../Recipes/Recipes";
import Form from "../Form/Form";
import { useDispatch } from "react-redux";
import { getRecipes } from "../../actions/recipes";
import { Login } from "../Login";

export function Dashboard() {
	// dispatch an action (getRecipes) to the redux store
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getRecipes());
	}, [dispatch]);

	return (
		<>
			<h1>Main Dash</h1>
			<div>
				<Recipes />
				<Form />
				<Login></Login>
			</div>
		</>
	);
}
