import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const LogInDiv = styled.div``;

const PopUpBox = styled.div``;

export function Login() {
	// cool google sign in prompt but it doesnt work all the time
	/* global google */
	// google.accounts.id.prompt();

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [decodedCredentialResponse, setDecodedCredentialResponse] = useState(null);
	const [showPopup, setShowPopup] = useState(false);
	const [username, setUsername] = useState("");

	// when a user signs in with google, a json web token is returned
	// this token contains encrypted information about the user that needs to be decrypted using jwt-decode
	const onSuccessRef = (credentialResponse) => {
		console.log(credentialResponse);
		const decodedResponse = jwtDecode(credentialResponse.credential);
		console.log(decodedResponse);
		setDecodedCredentialResponse(decodedResponse);
		setShowPopup(true);
	};

	const onErrorRef = () => {
		console.log("error");
	};

	const submitSignUp = (decodedCredentialResponse) => {
		try {
			// dispatch the decodedCredentialResponse to the redux store
			dispatch({ type: "LOGIN", data: { decodedCredentialResponse } });
			// redirect to dashboard after login
			navigate("/recipes");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<LogInDiv>
			<GoogleLogin onSuccess={onSuccessRef} onError={onErrorRef} cookiePolicy="single_host_origin" />
			{showPopup ? (
				<PopUpBox>
					Welcome new user!<br></br>
					What would you like your username to be?
					<form>
						<input type="text" onChange={(e) => setUsername(e.target.value)} />
					</form>
					<button onClick={() => submitSignUp(decodedCredentialResponse)}>Submit</button>
				</PopUpBox>
			) : null}
		</LogInDiv>
	);
}

export default Login;
