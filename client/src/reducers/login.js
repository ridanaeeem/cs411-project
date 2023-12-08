const loginReducer = (state = { authData: null }, action) => {
	switch (action.type) {
		// save login data in local storage
		case "LOGIN":
			localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
			return { ...state, authData: action?.data }; 
		default:
			return state;
	}
};

export default loginReducer;
