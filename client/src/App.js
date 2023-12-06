import React, { useEffect, useState } from "react";
import Recipes from "./components/Recipes/Recipes";
import Form from "./components/Form/Form";
import { useDispatch } from "react-redux";
import { getRecipes } from "./actions/recipes";
import { Login } from "./components/Login";

const App = () => {
	// keeping track of recipe id for updating purposes
	// default id = null
	const [currentId, setCurrentId] = useState(null);

	// dispatch an action (getRecipes) to the redux store
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getRecipes());
	}, [dispatch]);

	return (
		<>
			<h1>Main Dash</h1>
			<div>
				<Recipes setCurrentId={setCurrentId} />
				<Form currentId={currentId} setCurrentId={setCurrentId} />
				<Login></Login>
			</div>
		</>
	);
};

export default App;
