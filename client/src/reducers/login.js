// reducers are functions that accept the state and the action
// the type of action will result in different responses

// set the initial state (of recipes) to an empty array
// this is the reducer function which is imported into reducers/index.js, where it is used

export default (username = "", action) => {
	switch (action.type) {
		// fetching all the recipes
		case "SUCESS":
			return username; // all the recipes
		// creating a new recipe, and the recipe is stored in the payload
		// case "CREATE":
		// 	return [...recipes, action.payload];
		default:
			return username;
	}
};
