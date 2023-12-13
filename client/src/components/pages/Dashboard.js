import React, { useEffect } from "react";
import styled from "styled-components";
import RecipeCards from "../Recipes/RecipeCards";
import Form from "../Form/Form";
import { useDispatch } from "react-redux";
import { getRecipes } from "../../actions/recipes";
import { FullPage } from "./Home";

const AllCards = styled.div``;

export const Subheading = styled.div`
	background-color: #89af6c;
	width: 100%;
`;

export const Tagline = styled.h3`
	padding: 2rem;
	text-align: center;
	font-weight: 100;
`;

export const FormDiv = styled.div`
	padding-top: 2rem;
`;

export function Dashboard({ curRecipe, setCurRecipe }) {
	// dispatch an action (getRecipes) to the redux store
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getRecipes());
	}, [dispatch]);

	return (
		<FullPage>
			<Subheading>
				<Tagline>
					Welcome to the Dashboard! Here you can find all the recipes that have been submitted and submit your
					very own to share with others! Get started below!
					<FormDiv>
						<Form />
					</FormDiv>
				</Tagline>
			</Subheading>
			<AllCards>
				<RecipeCards curRecipe={curRecipe} setCurRecipe={setCurRecipe} />
			</AllCards>
		</FullPage>
	);
}
