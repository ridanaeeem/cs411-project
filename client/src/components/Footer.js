import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledFooter = styled.footer`
	background-color: white;
	height: 2rem;
	padding: 1rem;
	margin: 1rem;
	width: 100%;
	text-align: center;
`;

export function Footer() {
	return (
		<StyledFooter>
			<p>Credits</p>
		</StyledFooter>
	);
}
