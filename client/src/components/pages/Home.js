import React, { useEffect } from "react";
import styled from "styled-components";
import Recipes from "../Recipes/Recipes";
import Form from "../Form/Form";
import { useDispatch } from "react-redux";
import { getRecipes } from "../../actions/recipes";
import { Login } from "../Login";

const FullPage = styled.div`
	background-color: #ffebd3;
`;

export function Home() {
	// dispatch an action (getRecipes) to the redux store
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getRecipes());
	}, [dispatch]);

	return (
		<FullPage>
			<h1>home page :3</h1>
			<div></div>
		</FullPage>
	);
}
