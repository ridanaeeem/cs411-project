import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledFooter = styled.footer`
	background-color: white;
	height: 2rem;
	margin: 1rem;
	width: 100%;
	text-align: center;
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: black;
	padding: 1rem;
`;

export function Footer({ user }) {
	return (
		<StyledFooter>
			<StyledLink to={user ? "/about" : "/"}>About</StyledLink> |
			<StyledLink to={user ? "/credits" : "/"}>Credits</StyledLink>
		</StyledFooter>
	);
}
