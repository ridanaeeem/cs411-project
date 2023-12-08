import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { getRecipes } from "../../actions/recipes";
import { Login } from "../Login";
import pot from "../../images/pot.svg";

export const FullPage = styled.div`
	background-color: #ffebd3;
	height: 100%;
`;

export const AccountForBar = styled.div`
	background-color: white;
	height: 5rem;
	width: 100%;
	z-index: 10;
	display: flex;
	flex-direction: row;
`;

const Container = styled.div`
	display: flex;
	flex-direction: row;
`;
const Tagline = styled.div`
	font-size: 3rem;
	padding: 10px;
	margin: 5rem 5rem;
	text-decoration: none;
	color: black;
	width: 50%;
`;

const Left = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	border: 1px solid black;
`;

const Pot = styled.img`
	border: 1px solid black;
`;

const Right = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

const Subtitle = styled.div`
	font-size: 3rem;
	padding: 10px;
	color: black;
	width: 100%;
	text-align: center;
`;

const SubText = styled.div`
	font-size: 1.5rem;
	padding: 1rem 10rem;
	color: black;
	width: 100%;
	text-align: center;
`;

export function Home() {
	// dispatch an action (getRecipes) to the redux store
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getRecipes());
	}, [dispatch]);

	return (
		<FullPage>
			<AccountForBar />
			<Container>
				<Left>
					<Tagline>Cooking just got a whole lot easier.</Tagline>
					<Login />
				</Left>
				<Right>
					<Pot src={pot} alt="pot" />
				</Right>
			</Container>
			<Subtitle>Our Mission</Subtitle>
			<SubText>
				We believe cooking should be a seamless and enjoyable experience for everyone, regardless of measurement
				preferences. Born out of a passion for culinary exploration, this is your go-to destination for
				hassle-free recipe conversion. Our platform effortlessly transforms recipes between various metric and
				imperial units, ensuring precision in your culinary endeavors. Say goodbye to the confusion of
				conflicting measurements and hello to a streamlined cooking process. But that's not all... we go beyond
				conversion, offering a virtual cookbook to store and organize your favorite recipes. Join us on a
				journey where precision meets convenience, and every recipe becomes a culinary triumph. Join us, and
				savor the joy of cooking without boundaries.
				<br></br>
				<br></br>
				Register today
			</SubText>
		</FullPage>
	);
}
