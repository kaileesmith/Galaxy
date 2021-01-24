$(document).ready(function () {
	// Getting references to our form and input
	const signUpForm = $("form.signup");
	const emailInput = $("input#email-input");
	const passwordInput = $("input#password-input");
	const houseInput = $("input#house-input");

	// When the signup button is clicked, we validate the email and password are not blank
	signUpForm.on("submit", function (event) {
		event.preventDefault();
		const userData = {
			email: emailInput.val().trim(),
			password: passwordInput.val().trim(),
			housename: houseInput.val().trim(),
		};

		if (!userData.email || !userData.password || !userData.housename) {
			return;
		}
		// If we have an email and password, run the signUpUser function
		signUpUser(userData.email, userData.password, userData.housename);
		emailInput.val("");
		passwordInput.val("");
	});

	// Does a post to the signup route. If successful, we are redirected to the members page
	// Otherwise we log any errors
	function signUpUser(email, password, housename) {
		$.post("/api/signup", {
			email: email,
			password: password,
			housename: housename,
		})
			.then(function (data) {
				window.location.replace("/members");
				// If there's an error, handle it by throwing up a bootstrap alert
			})
			.catch(handleLoginErr);
	}

	function handleLoginErr(err) {
		$("#alert .msg").text(err.responseJSON);
		$("#alert").fadeIn(500);
	}
});

// Testing for data coming back from moviedb api
const api_key = "377d204d39af79fa8ff77e128da22e87";
const tvUrl = `https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=en-US&page=1`;

fetch(tvUrl)
	.then((res) => res.json())
	.then((json) => console.log(json.results));
