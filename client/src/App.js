import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { Home } from "./components/pages/Home";
import { Dashboard } from "./components/pages/Dashboard";
import { About } from "./components/pages/About";
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
	return (
		<Router>
			<Navbar />
			<AccountForBar />
			<Routes>
				<Route path="/" Component={Home} />
				<Route path="/recipes" Component={Dashboard} />
				<Route path="/about" Component={About} />
				<Route path="/:username" Component={Profile} />
				<Route path="/:username/:title" Component={Recipe} />
			</Routes>
			<Footer />
		</Router>
	);
};

export default App;
