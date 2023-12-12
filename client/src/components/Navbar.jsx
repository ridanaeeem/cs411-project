import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
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
	// get user info from the credentials stored in profile in local storage
	const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
	const username = user ? user.username : null;
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();

	// for testing purposes
	// if (user) {
	// 	console.log("current username is: " + user.username);
	// } else {
	// 	console.log("current user is not logged in, see: " + user);
	// }

	const logout = () => {
		dispatch({ type: "LOGOUT" });
		navigate("/");
		setUser(null);
	};

	// when location changes (redirects pages), update user
	// this way you don't have to refresh for website to know you're logged in
	useEffect(() => {
		setUser(JSON.parse(localStorage.getItem("profile")));
	}, [location]);

	return (
		<StyledNav>
			<Logo />
			<StyledTabs>
				<StyledLink to={user ? "/recipes" : "/"}>Dashboard</StyledLink>
				<StyledLink to={username !== null ? `/${username}` : "/"}>Cookbook</StyledLink>
				<StyledLink to={"/"} onClick={logout}>
					Sign Out
				</StyledLink>
			</StyledTabs>
		</StyledNav>
	);
}
