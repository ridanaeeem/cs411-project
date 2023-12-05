import React from "react";
import ReactDOM from "react-dom/client";
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

// get google client id from .env file
const googleID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

// wrap app in provider and pass the store we just created as prop
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<GoogleOAuthProvider clientId={googleID}>
		<Provider store={store}>
			<App />
		</Provider>
	</GoogleOAuthProvider>
);
