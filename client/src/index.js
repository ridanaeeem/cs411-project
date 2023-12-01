import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; //keep track of global store so we can see states from anywhere in app
import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";
import App from "./App";

const store = configureStore({
	reducer: reducers,
	middleware: [thunk],
});

// wrap app in provider and pass the store we just created as prop
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
