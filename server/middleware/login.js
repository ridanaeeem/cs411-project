import jwt from "jsonwebtoken";
// middleware checks to see if a user is allowed to perform the next action
const login = (req, res, next) => {
	try {
		// token is at index 1 of the array
		const token = req.headers.authorization.split(" ")[1];
		const isCustomAuth = token.length < 500;

		let decodedData;

		if (token && isCustomAuth) {
			// verify token
			decodedData = jwt.verify(token, "test");

			// set req.userId to decodedData.id
			req.userId = decodedData?.id;
		} else {
			decodedDate = jwt.decode(token);
			req.userId = decodedData?.sub;
		}
	} catch (error) {
		console.log(error);
	}
};

export default login;
