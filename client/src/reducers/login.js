const loginReducer = (state = { authData: null }, action) => {
	switch (action.type) {
		case "LOGIN":
			localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
			console.log("hiii");
			return state;
		default:
			return state;
	}
};

export default loginReducer;
