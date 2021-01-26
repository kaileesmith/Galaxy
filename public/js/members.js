$(document).ready(function () {
	// This file just does a GET request to figure out which user is logged in
	// and updates the HTML on the page
	$.get("/api/user_data").then(function (data) {
		$(".member-name").text(data.housename);
	});

	// Getting references to our form and input
	const addUser = $("form.add");
	const nameInput = $("input#name-input");
	const deleteBtn = document.querySelectorAll(".delete");

	// Event listener for button to add new user
	addUser.on("submit", (e) => {
		e.preventDefault();
		const userData = {
			name: nameInput.val().trim(),
		};

		inputUser(userData.name);
		nameInput.val("");
	});

	// Event listener for button to delete new user
	deleteBtn.forEach((button) => {
		button.addEventListener("click", (e) => {
			e.preventDefault();
			console.log("this was hit!");

			const id = e.currentTarget.getAttribute("data-id");
			console.log(id);
			fetch(`/api/housemember/${id}`, {
				method: "DELETE",
			});
			location.reload("/");
		});
	});

	// Function to add new user
	function inputUser(name) {
		$.post("/api/housemember", {
			name: name,
		})
			.then((data) => {
				console.log("A new user has been added!");
				location.reload("/");
			})
			.catch(handleLoginErr);
	}

	// Function to delete a user
	function deleteUser(id) {
		$.delete("/api/housemember/:id", {
			id: id,
		})
			.then((data) => {
				console.log("A user was deleted!");
				location.reload("/");
			})
			.catch(handleLoginErr);
	}

	function handleLoginErr(err) {
		$("#alert .msg").text(err.responseJSON);
		$("#alert").fadeIn(500);
	}

	// Start code for adding a Chore

	// Getting input from the user
	const addTask = $("form.addTask");
	const choreInput = $("input#chore-title-input");
	const choreDescription = $("textarea#chore-description-input");
	const memberSelected = $("select#houseMember");
	

	// Event listener for button to add new task

	addTask.on("submit", (e) => {
		e.preventDefault();

		const taskData = {
			title: choreInput.val().trim(),
			description: choreDescription.val().trim(),
			housemember: memberSelected.val(),
		};
		console.log(taskData);

		addChore(taskData.title, taskData.description, taskData.housemember);
		choreInput.val("");
		choreDescription.val("");
	});

	// Function to add a task
	function addChore(title, description, housemember) {
		$.post("/api/task", {
			title: title,
			description: description,
			housemember: housemember,
		})
			.then((data) => {
				console.log("A new chore has been added");
				location.reload("/");
			})
			.catch(handleLoginErr);
	}
});

const deleteBtn2 = document.querySelectorAll(".delete2");

// Event listener for button to delete new user
deleteBtn2.forEach((button) => {
	button.addEventListener("click", (e) => {
		e.preventDefault();

		const id = e.currentTarget.getAttribute("data-id");
		console.log(id);
		fetch(`/api/task/${id}`, {
			method: "DELETE",
		});
		location.reload("/");
	});
});

// Function to delete a task
function deleteTask(id) {
	$.delete("/api/task/:id", {
		id: id,
	})
		.then((data) => {
			console.log("A task was deleted!");
			location.reload("/");
		})
		.console.log("completed");
}



