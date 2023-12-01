import React, { useEffect } from "react";
import Recipes from "./components/Recipes/Recipes";
import Form from "./components/Form/Form";
import { useDispatch } from "react-redux";
import { getRecipes } from "./actions/recipes";

const App = () => {
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
			</div>
		</>
	);
};

export default App;
