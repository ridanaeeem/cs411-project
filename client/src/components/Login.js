import { useEffect, useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

export function Login() {
    const [user, setUser] = useState({

    });
	// when a user signs in with google, a json web token is returned
	// this token contains encrypted information about the user that needs to be decrypted using jwt-decode
	const onSuccessRef = (credentialResponse) => {
		console.log(credentialResponse);
		const decodedCredentialResponse = jwtDecode(credentialResponse.credential);
		console.log(decodedCredentialResponse);
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
