import * as api from "../api"; // import all named exports from api file as api

// Action Creators are functions that return actions
// an action is an object that has a type and a payload
// this will be asynchronous because we are fetching data
// we use redux thunk here with double arrow functions
// we also use redux to dispatch an action at the end
export const getRecipes = () => async (dispatch) => {
	try {
		// the response from the database (the recipes) is stored in the data variable
		const { data } = await api.fetchRecipes();
		// dispatch the action from the backend data
		dispatch({ type: "FETCH_ALL", payload: data });
	} catch (error) {
		console.log(error.message);
	}
};
