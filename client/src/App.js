import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Dashboard } from "./components/pages/Dashboard";
import { About } from "./components/pages/About";
import { Profile } from "./components/pages/Profile";
import { Recipe } from "./components/pages/Recipe";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" Component={Home} />
				<Route path="/recipes" Component={Dashboard} />
				<Route path="/about" Component={About} />
				<Route path="/:username" Component={Profile} />
				<Route path="/:username/:title" Component={Recipe} />
			</Routes>
		</Router>
	);
};

export default App;
