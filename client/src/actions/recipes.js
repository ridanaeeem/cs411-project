import * as api from "../api"; // import all named exports from api file as api

// Action Creators are functions that return actions
// an action is an object that has a type and a payload
// this will be asynchronous because we are fetching data
// we use redux thunk here (dispatch) with double arrow functions
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

export const createRecipe = (recipe) => async (dispatch) => {
	try {
		// sends recipe, making a post api request to backend
		const { data } = await api.createRecipe(recipe);
		dispatch({ type: "CREATE", payload: data });
	} catch (error) {
		console.log(error.message);
	}
};

export const updateRecipe = (id, recipe) => async (dispatch) => {
	try {
		const { data } = await api.updateRecipe(id, recipe);
		dispatch({ type: "UPDATE", payload: data });
	} catch (error) {
		console.log(error.message);
	}
};
