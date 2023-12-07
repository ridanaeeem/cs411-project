import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Logo } from "./Logo";

const StyledNav = styled.nav`
	background-color: white;
	height: 5rem;
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 10;
	display: flex;
	flex-direction: row;
`;

const StyledLink = styled(Link)`
	padding: 10px;
	text-decoration: none;
	font-size: 3rem;
	color: black;
	margin: 0 0.25rem;
`;

const StyledTabs = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: right;
	width: 50%;
`;

export function Navbar() {
	return (
		<StyledNav>
			<Logo />
			<StyledTabs>
				<StyledLink to={"/about"}>About</StyledLink>
				<StyledLink to={"/:username"}>Profile</StyledLink>
				<StyledLink to={""}>Sign Out</StyledLink>
			</StyledTabs>
		</StyledNav>
	);
}
