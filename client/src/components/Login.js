import React from "react";
import styled from "styled-components";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const LogInDiv = styled.div``;

export function Login() {
	// cool google sign in prompt but it doesnt work all the time
	/* global google */
	// google.accounts.id.prompt();

	const dispatch = useDispatch();
	const navigate = useNavigate();
	// when a user signs in with google, a json web token is returned
	// this token contains encrypted information about the user that needs to be decrypted using jwt-decode
	const onSuccessRef = (credentialResponse) => {
		const decodedCredentialResponse = jwtDecode(credentialResponse.credential);
		const email = decodedCredentialResponse.email;
		const atIndex = email.indexOf("@");
		const username = email.slice(0, atIndex);
		try {
			// dispatch the user info to the redux store
			dispatch({ type: "LOGIN", data: { email, username } });
			// redirect to dashboard after login
			navigate("/recipes");
		} catch (error) {
			console.log(error);
		}
	};

	const onErrorRef = () => {
		console.log("error");
	};

	return (
		<LogInDiv>
			<GoogleLogin onSuccess={onSuccessRef} onError={onErrorRef} cookiePolicy="single_host_origin" />
		</LogInDiv>
	);
}

export default Login;
