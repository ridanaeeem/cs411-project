import { useEffect } from "react";
import { GoogleLogin } from "@react-oauth/google";

export function Login() {
	return (
		<GoogleLogin>
			onSuccess=
			{(credientialResponse) => {
				console.log(credientialResponse);
			}}
			onError=
			{() => {
				console.log("error");
			}}
		</GoogleLogin>
	);
}

export default Login;
