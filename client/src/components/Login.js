import { useEffect, useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";

export function Login() {
	const [user, setUser] = useState({});
	const [signedUp, setSignedUp] = useState(false);
	const dispatch = useDispatch();
	// when a user signs in with google, a json web token is returned
	// this token contains encrypted information about the user that needs to be decrypted using jwt-decode
	const onSuccessRef = (credentialResponse) => {
		console.log(credentialResponse);
		const decodedCredentialResponse = jwtDecode(credentialResponse.credential);
		console.log(decodedCredentialResponse);
		try {
			dispatch({ type: "LOGIN", data: { decodedCredentialResponse } });
		} catch (error) {
			console.log(error);
		}
	};

	const onErrorRef = () => {
		console.log("error");
	};

	return (
		<>
			<GoogleLogin onSuccess={onSuccessRef} onError={onErrorRef} cookiePolicy="single_host_origin" />
		</>
	);
}

export default Login;
