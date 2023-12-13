import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { getRecipes } from "../../actions/recipes";
import { FullPage } from "./Home";
import default2 from "../../images/default2.svg";

const Background = styled.img`
	width: 100%;
	height: 100%;
`;

export function Credits() {
	// dispatch an action (getRecipes) to the redux store
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getRecipes());
	}, [dispatch]);

	return (
		<FullPage>
			<Background src={default2} alt="banner" />
			<h1>credits page</h1>
			<div></div>
		</FullPage>
	);
}
