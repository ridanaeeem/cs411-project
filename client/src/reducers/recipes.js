// reducers are functions that accept the state and the action
// the type of action will result in different responses

// set the initial state (of recipes) to an empty array
// this is the reducer function which is imported into reducers/index.js, where it is used

export default (recipes = [], action) => {
	switch (action.type) {
		// fetching all the recipes
		case "FETCH_ALL":
			// return [...recipes, action.payload]; // the brackets were messing with the format, seems to work without them
			return action.payload; // all the recipes
		// creating a new recipe, and the recipe is stored in the payload
		case "CREATE":
			return [...recipes, action.payload];
		case "UPDATE":
			return recipes.map((recipe) => (recipe._id === action.payload._id ? action.payload : recipe));
		default:
			return recipes;
	}
};
