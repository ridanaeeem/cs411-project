import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const LogInDiv = styled.div``;

export function Login() {
	// cool google sign in prompt but it doesnt work all the time
	/* global google */
	// google.accounts.id.prompt();

	const [user, setUser] = useState({});
	const [signedUp, setSignedUp] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	// when a user signs in with google, a json web token is returned
	// this token contains encrypted information about the user that needs to be decrypted using jwt-decode
	const onSuccessRef = (credentialResponse) => {
		console.log(credentialResponse);
		const decodedCredentialResponse = jwtDecode(credentialResponse.credential);
		console.log(decodedCredentialResponse);
		try {
			// dispatch the decodedCredentialResponse to the redux store
			dispatch({ type: "LOGIN", data: { decodedCredentialResponse } });
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
			<GoogleLogin onSuccess={onSuccessRef} onError={onErrorRef} />
		</LogInDiv>
	);
}

export default Login;
