import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { getRecipes } from "../../actions/recipes";
import { FullPage } from "./Home";

export const Title = styled.h1`
	text-align: center;
	padding: 5rem;
	font-size: calc(3rem + 20px);
`;

export const SubText = styled.div`
	font-size: 1.5rem;
	padding: 1rem 20rem 10rem 20rem;
	color: black;
	width: 100%;
	text-align: center;
`;

export const StyledLink = styled.a`
	color: black;
`;

export function Credits() {
	// dispatch an action (getRecipes) to the redux store
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getRecipes());
	}, [dispatch]);

	return (
		<FullPage>
			<Title>Credits</Title>
			<SubText>
				Recipes posted on this website are not guaranteed to be original content, and if they originated from an
				outside source a link is provided. All credit for these recipes belongs to their respective creators as
				linked on the individual recipe pages.
				<br></br>
				<br></br>
				In order to parse recipe information from links, the following APIs were used:{" "}
				<StyledLink href="https://github.com/hhursev/recipe-scrapers">recipe-scraper</StyledLink> (also{" "}
				<StyledLink href="https://recipe-scrape.vercel.app/api/scrape?url=">here</StyledLink>) and{" "}
				<StyledLink href="https://rapidapi.com/dashdash/api/cookr-recipe-parser">Cookr</StyledLink>.<br></br>
				<br></br>
				The{" "}
				<StyledLink href="https://rapidapi.com/spoonacular/api/recipe-food-nutrition/">
					Spoonacular API
				</StyledLink>{" "}
				was also used in order to calculate conversion rates, but due to rate limits has not yet been fully
				implemented.
				<br></br>
				<br></br>
				All graphics were generated on <StyledLink href="https://figma.com">Figma</StyledLink>.
			</SubText>
		</FullPage>
	);
}
