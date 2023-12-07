import { useEffect, useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useSelector } from "react-redux"; //allows us to fetch data from global redux store
import { useDispatch } from "react-redux";


export function Login() {
	// so we can dispatch the actions
	const dispatch = useDispatch();

	const [user, setUser] = useState({ username: "" });

	// when a user signs in with google, a json web token is returned
	// this token contains encrypted information about the user that needs to be decrypted using jwt-decode
	const onSuccessRef = (credentialResponse) => {
		console.log(credentialResponse);
		const decodedCredentialResponse = jwtDecode(credentialResponse.credential);
		console.log(decodedCredentialResponse);
		setUser({ ...user, username: decodedCredentialResponse.name });
		console.log(user);
	};

	const onErrorRef = () => {
		console.log("error");
	};
	return (
		<>
			<GoogleLogin onSuccess={onSuccessRef} onError={onErrorRef} />
		</>
	);
}

export default Login;
