import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
	background-color: white;
`;

const StyledLink = styled(Link)`
	color: red;
	padding: 10px;
	text-decoration: none;
`;

export function Navbar() {
	return (
		<StyledNav>
			<StyledLink to={"/recipes"}>Easier Recipe</StyledLink>
			<StyledLink to={"/about"}>About</StyledLink>
			<StyledLink to={"/:username"}>Profile</StyledLink>
			<StyledLink to={""}>Sign Out</StyledLink>
		</StyledNav>
	);
}
