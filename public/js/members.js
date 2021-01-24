$(document).ready(function () {
	// This file just does a GET request to figure out which user is logged in
	// and updates the HTML on the page
	$.get("/api/user_data").then(function (data) {
		$(".member-name").text(data.housename);
	});

	// Getting references to our form and input
	const addUser = $("form.add");
	const nameInput = $("input#name-input");

	// Event listener for button to add new user
	addUser.on("submit", (e) => {
		e.preventDefault();
		const userData = {
			name: nameInput.val().trim(),
		};

		inputUser(userData.name);
		nameInput.val("");
	});

	// Function to add new user
	function inputUser(name) {
		$.post("/api/housemember", {
			name: name,
		})
			.then((data) => {
				console.log("A new user has been added!");
			})
			.catch(handleLoginErr);
	}

	function handleLoginErr(err) {
		$("#alert .msg").text(err.responseJSON);
		$("#alert").fadeIn(500);
	}
});


// Start task 