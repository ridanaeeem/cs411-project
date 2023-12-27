import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { Home } from "./components/pages/Home";
import { Dashboard } from "./components/pages/Dashboard";
import { About } from "./components/pages/About";
import { Credits } from "./components/pages/Credits";
import { Profile } from "./components/pages/Profile";
import { Recipe } from "./components/pages/Recipe";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export const AccountForBar = styled.div`
	background-color: white;
	height: 5rem;
	width: 100%;
	z-index: 10;
	display: flex;
	flex-direction: row;
`;

const App = () => {
	// when location changes (redirects pages), update user
	// this way you don't have to refresh for website to know you're logged in
	const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

	const [curRecipe, setCurRecipe] = useState(undefined);

	return (
		<Router>
			<Navbar user={user} setUser={setUser} />
			<AccountForBar />
			<Routes>
				<Route path="/" element={<Home user={user} />} />
				<Route path="/recipes" element={<Dashboard curRecipe={curRecipe} setCurRecipe={setCurRecipe} />} />
				<Route path="/about" Component={About} />
				<Route path="/credits" Component={Credits} />
				<Route path="/:username" element={<Profile setCurRecipe={setCurRecipe} />} />
				<Route
					path="/:username/:title"
					element={<Recipe curRecipe={curRecipe} setCurRecipe={setCurRecipe} />}
				/>
			</Routes>
			<Footer user={user} />
		</Router>
	);
};

export default App;
