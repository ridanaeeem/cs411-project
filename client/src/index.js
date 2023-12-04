import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; //keep track of global store so we can see states from anywhere in app
import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, compose } from "redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
import thunk from "redux-thunk";

import reducers from "./reducers";
import App from "./App";

const store = configureStore({
	reducer: reducers,
	middleware: [thunk],
});

// // Assuming this script is in your project root
// const fs = require("fs");
// const path = require("path");

// const envPath = path.join("config", ".env");

// // Read the contents of the .env file
// const envContents = fs.readFileSync(envPath, "utf8");

// // Parse the contents into key-value pairs
// const envVariables = envContents
// 	.split("\n")
// 	.filter((line) => line.trim() !== "")
// 	.reduce((acc, line) => {
// 		const [key, value] = line.split("=");
// 		acc[key.trim()] = value.trim();
// 		return acc;
// 	}, {});

// Access the environment variables in your code


// wrap app in provider and pass the store we just created as prop
ReactDOM.render(
	<GoogleOAuthProvider clientId={REACT_APP_GOOGLE_CLIENT_ID}>
		<Provider store={store}>
			<App />
		</Provider>
	</GoogleOAuthProvider>,
	document.getElementById("root")
);
