import React, { useEffect } from "react";
import styled from "styled-components";
import RecipeCards from "../Recipes/RecipeCards";
import Form from "../Form/Form";
import { useDispatch } from "react-redux";
import { getRecipes } from "../../actions/recipes";
import { FullPage } from "./Home";

const AllCards = styled.div``;

export function Dashboard({ curRecipe, setCurRecipe }) {
	// dispatch an action (getRecipes) to the redux store
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getRecipes());
	}, [dispatch]);

	return (
		<FullPage>
			<AllCards>
				<RecipeCards curRecipe={curRecipe} setCurRecipe={setCurRecipe} />
			</AllCards>
			<div>
				<Form />
			</div>
		</FullPage>
	);
}
