import React, { useEffect } from "react";
import styled from "styled-components";
import RecipeCards from "../Recipes/RecipeCards";
import Form from "../Form/Form";
import { useDispatch } from "react-redux";
import { getRecipes } from "../../actions/recipes";
import { FullPage } from "./Home";

export function Dashboard({ curRecipe, setCurRecipe }) {
	// dispatch an action (getRecipes) to the redux store
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getRecipes());
	}, [dispatch]);

	return (
		<FullPage>
			<h1>Main Dash</h1>
			<div>
				<RecipeCards curRecipe={curRecipe} setCurRecipe={setCurRecipe} />
				<Form />
			</div>
		</FullPage>
	);
}
