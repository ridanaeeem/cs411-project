import { useEffect } from "react";
import { GoogleLogin } from "@react-oauth/google";

export function Login() {
	const onSuccessRef = (credentialResponse) => {
		console.log(credentialResponse);
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
