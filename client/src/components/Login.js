import { useEffect } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

export function Login() {
	const onSuccessRef = (credentialResponse) => {
		console.log(credentialResponse);
		const decodedCredentialResponse = jwtDecode(credentialResponse.credential);
		console.log(decodedCredentialResponse);
	};

	const onError = () => {
		console.log("error");
	};
	return (
		<>
			<GoogleLogin onSuccess={onSuccessRef} onError={onError} />
		</>
	);
}

export default Login;
