import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLogo = styled(Link)`
	font-size: 3rem;
	padding: 10px;
	text-decoration: none;
	color: black;
	width: 50%;
`;

export function Logo() {
	return <StyledLogo to={"/"}>Easier Recipe</StyledLogo>;
}
