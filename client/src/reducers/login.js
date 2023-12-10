const loginReducer = (state = { authData: null }, action) => {
	switch (action.type) {
		// save login data in local storage
		case "LOGIN":
			// send current user's username (email) to local storage
			localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
			return { ...state, authData: action?.data };
		case "LOGOUT":
			localStorage.clear();
			return { ...state, authData: null };
		default:
			return state;
	}
};

export default loginReducer;
