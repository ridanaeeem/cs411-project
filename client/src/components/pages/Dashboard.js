import React, { useEffect } from "react";
import styled from "styled-components";
import Recipes from "../Recipes/Recipes";
import Form from "../Form/Form";
import { useDispatch } from "react-redux";
import { getRecipes } from "../../actions/recipes";
import { FullPage } from "./Home";
import { AccountForBar } from "./Home";

export function Dashboard() {
	// dispatch an action (getRecipes) to the redux store
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getRecipes());
	}, [dispatch]);

	return (
		<FullPage>
			<AccountForBar />
			<h1>Main Dash</h1>
			<div>
				<Recipes />
				<Form />
			</div>
		</FullPage>
	);
}
