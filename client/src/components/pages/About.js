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

export const Title = styled.h1`
	text-align: center;
	padding: 5rem;
	font-size: calc(3rem + 20px);
`;

export const SubText = styled.div`
	font-size: 1.5rem;
	padding: 10rem 20rem;
	color: black;
	width: 100%;
	text-align: center;
`;

export function About() {
	// dispatch an action (getRecipes) to the redux store
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getRecipes());
	}, [dispatch]);

	return (
		<FullPage>
			<Title>About Us</Title>
			<Background src={default2} alt="banner" />
			<SubText>
				We believe cooking should be a seamless and enjoyable experience for everyone, regardless of measurement
				preferences. Born out of a passion for culinary exploration, this is your go-to destination for
				hassle-free recipe conversion. Our platform effortlessly transforms recipes between various metric and
				imperial units, ensuring precision in your culinary endeavors. Say goodbye to the confusion of
				conflicting measurements and hello to a streamlined cooking process.
				<br></br>
				<br></br>
				But that's not all... we go beyond conversion, offering a virtual cookbook to store and organize your
				favorite recipes. Join us on a journey where precision meets convenience, and every recipe becomes a
				culinary triumph. Join us, and savor the joy of cooking without boundaries. Create a profile and save
				your preferred metrics in your personal cookbook for a seamless experience in future kitchen endeavors.
			</SubText>
		</FullPage>
	);
}
