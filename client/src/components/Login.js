const clientId = "454849403965-s4dl91p54ee23ei64tgdpsv3c504ltfg.apps.googleusercontent.com";

export function Login() {
	function onSignIn(googleUser) {
		var profile = googleUser.getBasicProfile();
		console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
		console.log("Name: " + profile.getName());
		console.log("Image URL: " + profile.getImageUrl());
		console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
	}

	return (
		<>
			<div class="g-signin2" data-onsuccess="onSignIn"></div>
		</>
	);
}

export default Login;
